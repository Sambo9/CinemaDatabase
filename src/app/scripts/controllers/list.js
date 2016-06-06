'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:ListController
 * @description
 * # ListController
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('ListController', function ($scope, FirebaseConnect) {
    $scope.movies = FirebaseConnect.getMovies();
    $scope.movieSuccess = false;
    $scope.movieError = false;
  });
