'use strict';

/**
 * @ngdoc directive
 * @name angularFireApp.directive:list
 * @description
 * # list
 */
angular.module('angularFireApp')
  .directive('list', function () {
    return {
      templateUrl: 'views/list.template.html',
      restrict: 'E',
      controller:
        function($scope, FirebaseConnect, $location) {

        // ===================================
        // ========= Function remove =========
        // ===================================
        $scope.del = function(movie) {
          FirebaseConnect.deleteMovie(movie)
            .then(function () {
              $scope.movieSuccess = true;
              $scope.movieError = false;
            })
            .catch(function () {
              $scope.movieSuccess = false;
              $scope.movieError = true;
            });
        };
        // =====================================
        // ========= Function redirect =========
        // =====================================
        $scope.redirect = function (path) {
          $location.path(path);
        }
      }

    };
  });
