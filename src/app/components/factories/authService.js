/**
 * Created by Sambo on 07/06/2016.
 */

'use strict';


angular.module('angularFireApp')
  .factory('authService', function (FIREBASE_URL, $firebaseAuth) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseAuth(ref);
  });

