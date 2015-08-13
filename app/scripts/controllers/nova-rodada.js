'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:NovaRodadaCtrl
 * @description
 * # NovaRodadaCtrl
 * Controller of the campoApp
 */
angular.module('campoApp')
  .controller('NovaRodadaCtrl', function (Rodada, $scope) {

  	$scope.rodada = new Rodada();

  	
  	
  });
