'use strict';

var campoServices = angular.module('campoApp');

campoServices.factory('Usuario', function ($resource) {
    var resource = $resource('rest/open/usuarios/:oid', 
        {
          oid : '@oid'
        }
    );  
  return resource;
});

campoServices.factory('Time', function ($resource) {
    var resource = $resource('rest/restricted/times/:oid', 
        {
          oid : '@oid'
        }
    );  
  return resource;
});

campoServices.factory('Torneio', function ($resource) {
    var resource = $resource('rest/restricted/torneios/:oid', 
        {
          oid : '@oid'
        }
    );  
  return resource;
});

campoServices.factory('Rodada', function ($resource) {
    var resource = $resource('rest/restricted/rodadas/:oid', 
        {
          oid : '@oid'
        }
    );  
  return resource;
});