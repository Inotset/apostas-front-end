'use strict';

/**
 * @ngdoc overview
 * @name campoApp
 * @description
 * # campoApp
 *
 * Main module of the application.
 */

angular.module('campoControllers', []);
angular.module('campoServices', []);
angular.module('campoFilters', []);

var app = angular.module('campoApp', 
  [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngToast',
    'ui.bootstrap',
    'angularFileUpload',
    'facebook',
    'satellizer'
  ]);

  app.factory('ErrorInterceptor',  
  function ($q, $rootScope, $location, $cookieStore) {
    return {
      request: function (config) {
        return config || $q.when(config);
      },
      requestError: function(request){
        return $q.reject(request);
      },
      response: function (response) {
        return response || $q.when(response);
      },
      responseError: function (response) {
        if (response && response.status === 401) {
          $cookieStore.remove('sessionId');
          $rootScope.$broadcast('request-login');
        }
        if (response && response.status === 404) {
              
        }
        if (response && response.status >= 500) {
        }
        return $q.reject(response);
      }
    };
  }
);

  app.config(function ($routeProvider, $httpProvider, $facebookProvider, $authProvider) {

    $authProvider.facebook({
      clientId: '6578543909778127'
    });

    $authProvider.google({
      clientId: '136404311847-c1d3bo8alovde2lf6ijg42potlncqlo5.apps.googleusercontent.com'
    });

    $authProvider.google({
      url: '/rest/open/auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      display: 'popup',
      type: '2.0'
    });

    $routeProvider
    .when('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
    })
    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
    })
    .when('/admin/usuarios', {
      templateUrl: 'views/usuarios.html',
      controller: 'UsuariosCtrl'
    })
    .when('/admin/times', {
      templateUrl: 'views/times.html',
      controller: 'TimesCtrl'
    })
    .when('/admin/torneios', {
      templateUrl: 'views/torneios.html',
      controller: 'TorneiosCtrl'
    })
    .when('/admin/torneios/:oid', {
      templateUrl: 'views/rodadas.html',
      controller: 'RodadasCtrl'
    })
    .when('/admin/torneios/:oid/nova-rodada', {
      templateUrl: 'views/nova-rodada.html',
      controller: 'NovaRodadaCtrl'
    })
    .when('/cadastro', {
      templateUrl: 'views/cadastro.html',
      controller: 'CadastroCtrl'
    })
    .otherwise(
        {
          redirectTo: '/home'
        }
    );
});