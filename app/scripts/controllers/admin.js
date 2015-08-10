'use strict';

angular.module('campoApp')
  .controller('AdminCtrl', function ($resource, $scope, Usuario, $modal, Time, Torneio) {

     $scope.time = new Time();
     $scope.aberto = false;
     $scope.usuarios = [];

  	$scope.abrir = function(){
  		$scope.aberto = true;
  	};

  	$scope.fechar = function(){
  		$scope.aberto = false;
  	};

  	$scope.abrirOpcao = function(opcao) {
  		$scope.desabilitarTodos();
  		switch(opcao) {
		     case 1:
		          $scope.showUsuarios = true;
		          $scope.usuarios = Usuario.query();
		          break;
		     case 2:
              $scope.showTimes = true;
              $scope.times = Time.query();
      		    break;
		     case 3:
              $scope.showTorneios = true;
              $scope.torneios = Torneio.query();
              break;
		     case 4:
              $scope.showEstatisticas = true;
              break;
		     default:
              $scope.desabilitarTodos();
		}
  	};

     $scope.setSelected = function(time){
          $scope.selected = time;
     };

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

  	$scope.desabilitarTodos = function(){
	  	$scope.showUsuarios = false;
	  	$scope.showTimes = false;
	  	$scope.showTorneios = false;
	  	$scope.showEstatisticas = false;
  	};

  	$scope.desabilitarTodos();

});

angular.module('campoApp').controller('ModalTimeCtrl', function ($resource, $scope, Usuario, $modal) {

     $scope.animationsEnabled = true;

     $scope.openTimes = function (size) {
          var modalInstance = $modal.open(
               {
                    animation: $scope.animationsEnabled,
                    templateUrl: 'myModalTime.html',
                    controller: 'ModalInstanceTimeCtrl',
                    size: size
               }
          );

          modalInstance.result.then(function (selectedItem) {
               $scope.selected = selectedItem;
          }, function () {
          });
     };

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

angular.module('campoApp').controller('ModalTorneioCtrl', function ($resource, $scope, Torneio, $modal) {

     $scope.animationsEnabled = true;

     $scope.openTorneios = function (size) {
          var modalInstance = $modal.open(
               {
                    animation: $scope.animationsEnabled,
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

 angular.module('campoApp')
  .controller('ModalInstanceTorneioCtrl', function ($resource, FileUploader, $scope, $modalInstance, Torneio, $timeout) {

     $scope.torneio = new Torneio();
     $scope.uploader = new FileUploader();

     $scope.salvarTorneio = function () {
          $scope.torneio.$save();
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
                   $scope.torneio.imagem = e.target.result;
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