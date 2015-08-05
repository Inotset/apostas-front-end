'use strict';

angular.module('campoApp')
  .controller('AdminCtrl', function ($resource, $scope, Usuario, $modal, Time, Torneio) {

  	$scope.aberto = false;
  	$scope.usuarios = [];

  	$scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

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
                       $scope.torneios = Torneio.query(
                         {},
                         function(data){
                              $scope.torneiosEdt = [];
                              
                              for (var dado in data){
                                   $scope.novo = data[dado].imagem;
                                   $scope.strImagem = '';

                                   if (dado === '$promise' || dado === '$resolved'){
                                        break;
                                   }

                                   for (var caractereLinha in $scope.novo){    
                                        if (caractereLinha === '$promise' || caractereLinha === '$resolved'){
                                             break;
                                        }
                                             
                                        $scope.strImagem += $scope.novo[caractereLinha].replace('\\','=');
                                   }

                                  $scope.logoMenuString = null;
                                  $scope.logoMenuString = $scope.strImagem.substring(1,($scope.strImagem.length - 1));
                                  $scope.logoMenuString = $scope.logoMenuString.replace(/u003d/g,'');

                                  $scope.obj = {};
                                  $scope.obj.nome = data[dado].nome;
                                  $scope.obj.logo = $scope.logoMenuString;

                                  $scope.torneiosEdt.push($scope.obj);
                              }
                         }
                    );
      		        break;
      		    case 4:
      		        $scope.showEstatisticas = true;
      		        break;
      		    default:
      		        $scope.desabilitarTodos();
		}
  	};

  	$scope.desabilitarTodos = function(){
	  	$scope.showUsuarios = false;
	  	$scope.showTimes = false;
	  	$scope.showTorneios = false;
	  	$scope.showEstatisticas = false;
  	}

  	$scope.desabilitarTodos();

});

angular.module('campoApp')
  .controller('ModalTimeCtrl', function ($resource, $scope, Usuario, $modal) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

 angular.module('campoApp')
  .controller('ModalInstanceCtrl', function ($resource, FileUploader, $scope, Usuario, $modalInstance, items, Time, $timeout) {

  $scope.time = new Time();
  $scope.uploader = new FileUploader();

	$scope.items = items;

	$scope.selected = {
		item: $scope.items[0]
	};

	$scope.salvarTime = function () {

        $scope.time.$save();
        $modalInstance.dismiss('cancel');
	};

    function el(id){
        return document.getElementById(id);
    };

    function readImage() {
        if (this.files && this.files[0] ) {
            var fr = new FileReader();
            fr.onload = function(e) {
                   el('img').src = e.target.result;
                   $scope.time.imagem = e.target.result;
            };       
            fr.readAsDataURL(this.files[0]);
        }
    };

    $timeout(function() {
            el('asd').addEventListener('change', readImage, false);
        }
    );
    
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

});