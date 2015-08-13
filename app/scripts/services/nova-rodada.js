'use strict';

/**
 * @ngdoc service
 * @name campoApp.novaRodada
 * @description
 * # novaRodada
 * Factory in the campoApp.
 */
angular.module('campoApp')
  .factory('novaRodada', function () {
    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
