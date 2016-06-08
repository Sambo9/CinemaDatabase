/**
 * Created by Sambo on 07/06/2016.
 */
'use strict';

/**
 * @ngdoc directive
 * @name angularFireApp.directive:login.directive
 * @description
 * # login.directive
 */
angular.module('angularFireApp')
  .directive('login', function () {
    return {
      templateUrl: 'app/components/directives/login/login.template.html',
      restrict: 'E',
      controller: function ($scope) {
      }
    };
  });
