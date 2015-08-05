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
    $httpProvider.interceptors.push('ErrorInterceptor');

    $authProvider.httpInterceptor = true; // Add Authorization header to HTTP request
    $authProvider.loginOnSignup = true;
    $authProvider.baseUrl = '/' // API Base URL for the paths below.
    $authProvider.loginRedirect = '/';
    $authProvider.logoutRedirect = '/';
    $authProvider.signupRedirect = '/login';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.loginRoute = '/login';
    $authProvider.signupRoute = '/signup';
    $authProvider.tokenRoot = false; // set the token parent element if the token is not the JSON root
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer'; // Local Storage name prefix
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.unlinkMethod = 'get';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.withCredentials = true;
    $authProvider.platform = 'browser'; // or 'mobile'
    $authProvider.storage = 'localStorage'; // or 'sessionStorage'

    $facebookProvider.init(
      {
        appId: 'campoApp'
      }
    );

    $authProvider.facebook({
      url: '/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host + '/',
      scope: 'email',
      scopeDelimiter: ',',
      requiredUrlParams: ['display', 'scope'],
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 481, height: 269 }
    });

    $authProvider.google({
      url: '/auth/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 580, height: 400 }
    });

    $authProvider.linkedin({
      url: '/auth/linkedin',
      authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
      redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
      requiredUrlParams: ['state'],
      scope: [],
      scopeDelimiter: ' ',
      state: 'STATE',
      type: '2.0',
      popupOptions: { width: 527, height: 582 }
    });

    $authProvider.twitter({
      url: '/auth/twitter',
      type: '1.0',
      popupOptions: { width: 495, height: 645 }
    });

    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .otherwise(
        {
          redirectTo: '/home'
        }
      );
});