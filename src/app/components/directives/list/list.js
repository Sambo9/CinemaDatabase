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
      templateUrl: 'app/components/directives/list/list.template.html',
      restrict: 'E',
      controller:
        function($scope, Movies, $location) {
        // ===================================
        // ========= Function remove =========
        // ===================================
        $scope.delete = function(movie) {
          Movies.deleteMovie(movie)
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
