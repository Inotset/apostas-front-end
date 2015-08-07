'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:CadastroCtrl
 * @description
 * # CadastroCtrl
 * Controller of the campoApp
 */
angular.module('campoApp')
  .controller('CadastroCtrl', function ($scope, Usuario, $cookieStore, $location, Toast) {

  	$scope.usuario = new Usuario();

  	$scope.registrar = function(usuario){
  		usuario.admin = false;
  		usuario.inativo = false;
  		usuario.bloqueado = false;
  		usuario.$save(
  			function(){
  				$scope.credentials.email = usuario.email;
		  		$scope.credentials.senha = usuario.password;
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
							Toast.showToast('Login ou senha inválidos', 'danger', 5000);
						}
						if(response.status === 500) {
							Toast.showToast('Problema ao comunicar-se com o servidor!', 'danger', 5000);
						}
					}
				);
  			}
  		);
  	};

  });
