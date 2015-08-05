'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the campoApp
 */
angular.module('campoApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$http.defaults.withCredentials = true;
    
  	$scope.$back = function() { 
        window.history.back();
    };

  });
