'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:ListController
 * @description
 * # ListController
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('ListController', function ($scope, Movies) {
    $scope.movies = Movies.getMovies();
    $scope.movieSuccess = false;
    $scope.movieError = false;
  });
