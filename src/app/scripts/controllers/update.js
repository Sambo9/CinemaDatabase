'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:UpdateController
 * @description
 * # UpdateController
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('UpdateController', function ($scope, FirebaseConnect, $routeParams, NOTE_SELECT) {
    $scope.updatedSuccess = false;
    $scope.updatedError = false;


    var id = $routeParams.id;
    FirebaseConnect.getMovie(id)
      .then(function (data) {
      $scope.movie = data;
        $scope.select = NOTE_SELECT;
        $scope.movie.rate = NOTE_SELECT[$scope.movie.rate.id-1];
    })
      .catch(function () {

    });
  });
