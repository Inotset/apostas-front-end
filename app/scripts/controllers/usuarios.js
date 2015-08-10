'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the campoApp
 */
angular.module('campoApp')
  .controller('UsuariosCtrl', function ($scope, Usuario) {

  	$scope.usuarios = Usuario.query();

  });
