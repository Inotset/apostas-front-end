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

		if(!$cookieStore.get('sessionId')) {
			if($rootScope.novoLogin) {
				$location.path('/login/home');
			} else {
				$location.path('/login');
			}
		} else {
			$scope.admin = $cookieStore.get('admin');
			/*
			$scope.usuarioIndex = Usuario.get({
				oid: $cookieStore.get('userId')
			});
			if (!$rootScope.usuarioLogado) {
				$rootScope.usuarioLogado = Usuario.get({'oid':$cookieStore.get('userId')});
			}
			$scope.usuario = $rootScope.usuarioLogado;

			if($cookieStore.get('nome')){
				$scope.conta = {};
				$scope.conta.nome = $cookieStore.get('nome');
				$scope.conta.sessionId = $cookieStore.get('sessionId');
				$scope.conta.userId = $cookieStore.get('userId');
				$scope.conta.nivel = $cookieStore.get('userNivel');
			}
			
		    $scope.notificacao = false;
    		$scope.mostrarNotificacao = false;

    		$rootScope.$broadcast('verificarNotificacao');
		*/
		}
	});

	$scope.logout = function() {
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
