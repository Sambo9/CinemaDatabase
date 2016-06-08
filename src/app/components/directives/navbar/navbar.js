/**
 * Created by Sambo on 07/06/2016.
 */

'use strict';


angular.module('angularFireApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/components/directives/navbar/navbar.html',
      restrict: 'E',
      controller : function ($scope, user) {

        $scope.$watch(function () {
          return user.isConnected();
        }, function () {
          $scope.user = user.get();
        });

        $scope.isConnected = function () {
          return user.isConnected();
        };

        $scope.disconnect = function () {
          user.disconnect();
        }
      }
    };
  });
