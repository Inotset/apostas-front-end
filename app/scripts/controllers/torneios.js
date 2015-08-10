'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:TorneiosCtrl
 * @description
 * # TorneiosCtrl
 * Controller of the campoApp
 */

angular.module('campoApp').controller('TorneiosCtrl', function ($resource, $scope, Torneio, $modal) {

	$scope.torneio = new Torneio();
  	$scope.torneios = Torneio.query();

  	$scope.excluirTorneio = function(torneio){
		torneio.$delete(
			{
				oid: torneio.oid
			},
			function(){
				$scope.torneios = Torneio.query();
			}
		);
	};

	$scope.adicionarRodada = function(torneio){
		
	};

    $scope.openTorneios = function (size) {
        var modalInstance = $modal.open(
            {
                animation: true,
                templateUrl: 'myModalTorneio.html',
                controller: 'ModalInstanceTorneioCtrl',
                size: size
            }
        );

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
		});
	};

});

angular.module('campoApp').controller('ModalInstanceTorneioCtrl', function ($resource, FileUploader, $scope, $modalInstance, Torneio, $timeout) {

	$scope.torneio = new Torneio();
	$scope.uploader = new FileUploader();

	$scope.salvarTorneio = function () {
		$scope.torneio.$save();
		$modalInstance.dismiss('cancel');
	};

    function el(id){
		return document.getElementById(id);
    };

    function readImage() {
        if (this.files && this.files[0]) {
            var fr = new FileReader();
            fr.onload = function(e) {
                   el('img').src = e.target.result;
                   $scope.torneio.imagem = e.target.result;
            };       
            fr.readAsDataURL(this.files[0]);
        }
    }

	$timeout(function() {
		el('asd').addEventListener('change', readImage, false);
	});
    
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
