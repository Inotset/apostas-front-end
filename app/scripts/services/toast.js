'use strict';

angular.module('campoApp').service('Toast', ['$resource', 'ngToast', function ($resource, ngToast) {
  this.showToast = function(mensagem, classe, tempo){
    var temporario = true;
  	if(classe !== 'danger' && classe !== 'success' && classe !== 'warning' && classe !== 'info'){
  		classe = 'danger';
  	}
    if(tempo === 0){
      temporario = false;
    }
  	if(!tempo){
  		tempo = 4000;
  	}
  	ngToast.create({
		content: mensagem,
		className: classe,
		dismissOnTimeout: temporario,
		timeout: tempo,
		dismissButton: true
	});
  }; 
}]);