'use strict';

/**
 * @ngdoc service
 * @name campoApp.rodadas
 * @description
 * # rodadas
 * Factory in the campoApp.
 */
angular.module('campoApp')
  .factory('rodadas', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
