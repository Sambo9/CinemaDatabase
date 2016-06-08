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
      controller: function ($scope, user) {
        if (user.isConnected()) {
          $location.path('/')
        }

        var initUser = {
          email : '',
          password : ''
        };
        $scope.user = angular.copy(initUser);

        $scope.reset = function () {
          $scope.user = angular.copy(initUser);
        };


        $scope.connect = function (email, password) {
          user.connect(email, password);
        };
      }
    };
  });
