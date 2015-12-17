'use strict';

/**
 * @ngdoc overview
 * @name yoTestApp
 * @description
 * # yoTestApp
 *
 * Main module of the application.
 */
angular
  .module('yoTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'MainCtrl'
      })
      .when('/lyrics', {
        templateUrl: 'views/lyrics.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
    });
  });
