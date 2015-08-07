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
