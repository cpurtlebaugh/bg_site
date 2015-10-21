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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl',
        controllerAs: 'contact'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'MainCtrl',
        controllerAs: 'video'
      })
      .when('/lyrics', {
        templateUrl: 'views/lyrics.html',
        controller: 'MainCtrl',
        controllerAs: 'lyrics'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
