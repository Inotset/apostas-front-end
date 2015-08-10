'use strict';

angular.module('campoApp').controller('AdminCtrl', function ($resource, $scope, $location) {

  	$scope.abrir = function(){
  		$scope.aberto = true;
  	};

  	$scope.fechar = function(){
  		$scope.aberto = false;
  	};

  	$scope.abrirOpcao = function(opcao) {

  		switch(opcao) {
		     case 1:
		      	$location.path('/admin/usuarios');
		     	break;
		     case 2:
              		$location.path('/admin/times');
      		    	break;
		     case 3:
             		$location.path('/admin/torneios');
              		break;
		     case 4:
              		break;
		     default:
              		break;
		}
  	};
});