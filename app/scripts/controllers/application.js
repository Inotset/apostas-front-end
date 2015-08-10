'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the campoApp
 */

angular.module('campoApp')
.controller('ApplicationCtrl', function ($http, $scope, $cookieStore, $rootScope, $location) {

	$rootScope.$on('$routeChangeSuccess', function () {
		$scope.showLoginDialog = !$cookieStore.get('sessionId');

		if ($location.$$url === '/cadastro') {
    		return;
    	}

		if(!$cookieStore.get('sessionId')) {
			if($rootScope.novoLogin) {
				$location.path('/login/home');
			} else {
				$location.path('/login');
			}
		} else {
			$scope.admin = $cookieStore.get('admin');
		}
	});

	$scope.inicio = 'active';

	$scope.click = function(opcao){

		$scope.inicio = '';
		$scope.torneios = '';
		$scope.apostas = '';
		$scope.classificacao = '';
		$scope.minhaConta = '';
		$scope.adm = '';

		switch(opcao) {
		    case 1:
		    	$scope.inicio = 'active';
		     	break;
		    case 2:
		    	$scope.torneios = 'active';
      		    break;
		    case 3:
		    	$scope.apostas = 'active';
              	break;
		    case 4:
		    	$scope.classificacao = 'active';
              	break;
            case 5:
            	$scope.minhaConta = 'active';
              	break;
            case 6:
            	$scope.adm = 'active';
              	break;
		    default:
              	break;
		}
	};

	$scope.logout = function() {
		$scope.inicio = 'active';
		$scope.torneios = '';
		$scope.apostas = '';
		$scope.classificacao = '';
		$scope.minhaConta = '';
		$scope.adm = '';
		$rootScope.usuarioLogado = null;
		$cookieStore.remove('sessionId');
		$location.path('/login');
	};

	$scope.$on('request-login', function() {
		$location.path('/login');
		$scope.showLoginDialog = true;
	});

	$scope.$on('request-login', function() {
	    $location.path('/login');
	    $scope.showLoginDialog = true;
	});

});
