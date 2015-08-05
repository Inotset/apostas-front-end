'use strict';

/**
 * @ngdoc function
 * @name campoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the campoApp
 */
angular.module('campoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
