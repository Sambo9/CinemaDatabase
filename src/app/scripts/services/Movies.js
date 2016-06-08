/**
 * Created by Sambo on 07/06/2016.
 */

angular.module('angularFireApp')
  .factory('Movies', function (FIREBASE_URL, $firebaseAuth) {
    var ref = new Firebase(FIREBASE_URL + '/movies');
    return $firebaseAuth(ref);
  });
