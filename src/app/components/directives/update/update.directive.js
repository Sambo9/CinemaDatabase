'use strict';

/**
 * @ngdoc directive
 * @name angularFireApp.directive:update.directive
 * @description
 * # update.directive
 */
angular.module('angularFireApp')
  .directive('update', function () {
    return {
      templateUrl: 'app/components/directives/update/update.template.html',
      restrict: 'E',
      transclude: true,
      controller: function ($scope, Movies, $location, $window) {
        // ===================================
        // ========= Function update =========
        // ===================================
        $scope.update = function (movie) {
          Movies.updateMovie(movie)
            .then(function () {
              $scope.updatedSuccess = true;
              $window.scrollTo(0, 0);
            })
            .catch(function () {
              $scope.updatedError = true;
            });
        };

        // ==============================================
        // ========= Function add/remove actors =========
        // ==============================================
        $scope.addingActor = function () {
          $scope.movie.actors.push({})
        };

        $scope.removeActor = function (index) {
          $scope.movie.actors.splice(index, 1);
        };

        // =====================================
        // ========= Function redirect =========
        // =====================================
        $scope.redirect = function (path) {
          $location.path(path);
        }
      },
      link: function (scope, element, attrs) {

        // ================================
        // ========= Upload image =========
        // ================================
        scope.fileChanged = function () {
          var file = element.find('#fileUpload').get(0).files[0];
          var fileReader = new FileReader();

          fileReader.addEventListener("load", function () {
            file = fileReader.result;
            scope.movie.poster = file;
          }, false);

          if (file) {
            fileReader.readAsDataURL(file);
          }

        };

      }
    };
  });
