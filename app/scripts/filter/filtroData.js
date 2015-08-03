'use strict';

var campoFilters = angular.module('campoApp');

campoFilters.filter('filtroData', function() {
  return function(input) {

  	if (!input){
  		return '';
  	}

	var data = input.substring(8,10) + '/' + input.substring(5,7) + '/' + input.substring(0,4);
	var hora = input.substring(11,13) + ':' + input.substring(14,16);

	var dataHora = data + ' - ' + hora;

	return dataHora;
  };
});