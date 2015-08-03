'use strict';


angular.module('campoApp')
  .factory('Login', function ($resource) {
    var resource = $resource('rest/open/login/');

    return resource;
});
