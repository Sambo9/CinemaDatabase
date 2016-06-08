/**
 * Created by Sambo on 07/06/2016.
 */

'use strict';


angular.module('angularFireApp')
  .controller('LoginController', function ($scope, $location, user) {

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

  });
