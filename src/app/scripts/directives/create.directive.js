'use strict';

/**
 * @ngdoc directive
 * @name angularFireApp.directive:create.directive
 * @description
 * # create.directive
 */
angular.module('angularFireApp')
  .directive('create', function () {
    return {
      templateUrl: 'views/create.template.html',
      restrict: 'E',
      controller: function ($scope, FirebaseConnect, $location) {

        // =====================================
        // ========= Function addMovie =========
        // =====================================
        $scope.addMovie = function () {

          FirebaseConnect.addMovie($scope.movie)
            .then(function () {
              $scope.movieSuccess = true;
              $scope.movieError = false;
            })
            .catch(function () {
              $scope.movieSuccess = false;
              $scope.movieError = true;
            })
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
        // $scope.addMovie = function () {
        //   FirebaseConnect.addMovie($scope.movie);
        // };

        // =====================================
        // ========= Function redirect =========
        // =====================================
        $scope.redirect = function (path) {
          $location.path(path);
        }
      },
      link: function (scope, element) {

        // ================================
        // ========= Upload image =========
        // ================================
        var fileInput = element.find('#fileUpload');
        var fileToUpload = null;

        fileInput.bind('change', function (fileUpload) {
          var file = fileUpload.target.files[0];
          var fileReader = new FileReader();
          fileReader.onload = function (file) {
            fileToUpload = file.target.result;
            scope.movie.poster = file.target.result;
          };
          if (file) {
            fileReader.readAsDataURL(file);
          }
        });
      }
    };
  });
