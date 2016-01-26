'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ]

    // quick fix for navbar dropdown to collapse
        $(".nav a").click(function () {
        if ($(".navbar-collapse").hasClass("in")) {
            $('[data-toggle="collapse"]').click();
        }
    });
  });
