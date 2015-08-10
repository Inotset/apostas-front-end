'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:TimesCtrl
 * @description
 * # TimesCtrl
 * Controller of the campoApp
 */

angular.module('campoApp').controller('TimesCtrl', function ($resource, $scope, $modal, Time) {

	$scope.time = new Time();
  	$scope.times = Time.query();

  	$scope.excluirTime = function(time){
		time.$delete(
			{
				oid: time.oid
			},
			function(){
				$scope.times = Time.query();
			}
		);
	};

    $scope.openTimes = function (size) {
        var modalInstance = $modal.open(
			{
				animation: true,
                templateUrl: 'myModalTime.html',
                controller: 'ModalInstanceTimeCtrl',
                size: size
            }
        );

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        },
        function () {
        });
    }

});

angular.module('campoApp')
.controller('ModalInstanceTimeCtrl', function ($resource, FileUploader, $scope, $modalInstance, Time, $timeout) {

    $scope.time = new Time();
    $scope.uploader = new FileUploader();

    $scope.salvarTime = function () {
        $scope.time.$save();
        $modalInstance.dismiss('cancel');
	};

    function el(id){
        return document.getElementById(id);
    }

    function readImage() {
        if (this.files && this.files[0] ) {
            var fr = new FileReader();
            fr.onload = function(e) {
                el('img').src = e.target.result;
                $scope.time.imagem = e.target.result;
            };       
            fr.readAsDataURL(this.files[0]);
        }
    }

    $timeout(function() {
			el('asd').addEventListener('change', readImage, false);
        }
    );
    
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

});