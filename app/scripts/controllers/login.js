'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the campoApp
 */
angular.module('campoApp')
  .controller('LoginCtrl', function ($scope, Login, $cookieStore, Toast, $location, $facebook, $auth) {

  	if($cookieStore.get('sessionId')) {
		$location.path('/');
	}

  	$scope.email = null;
  	$scope.password = null;

  	$scope.credentials = new Login();

  	$scope.login = function() {
  		$scope.credentials.email = $scope.email;
  		$scope.credentials.senha = $scope.password;
		$scope.credentials.$save(
			function(data){
				$cookieStore.put('sessionId', data.sessionId);
				$cookieStore.put('nome', data.nome);
				$cookieStore.put('userId', data.userId);
				$cookieStore.put('admin', data.admin);
				$location.path('/');
			},
			function(response){
				if(response.status === 400) {
					Toast.showToast(response.data.message, 'danger', 5000);					
				}
				if(response.status === 500) {
					Toast.showToast('Problema ao comunicar-se com o servidor!', 'danger', 5000);
				}
			}
		);
	};

	

	$scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

	/*$scope.loginFacebook = function() {
		$facebook.login(
			{
				scope:'email'
			}
		).then(function(response) {
			console.log(response);
		},
		function(response) {
			console.log("Error!", response);
		});
	};*/

	$scope.novaSenha = function() {
		$rootScope.novoLogin = true;
		$location.path('/login/novo');
	};

	$scope.entrar = function() {
		$scope.login();
	};

});
