'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:RodadasCtrl
 * @description
 * # RodadasCtrl
 * Controller of the campoApp
 */
angular.module('campoApp')
  .controller('RodadasCtrl', function ($scope, $location, $routeParams) {

  	$scope.adicionarRodada = function(){
		$location.path('/admin/torneios/' + $routeParams.oid + "/nova-rodada");
	};

	$scope.voltar = function(){
		$location.path('/admin/torneios/' + $routeParams.oid);
	};

  });
