/**
 * Created by Sambo on 08/06/2016.
 */

'use strict';

angular.module('angularFireApp')
  .directive('authorization', function () {
    return {
      restrict: 'A',
      controller: function (user) {
        user.validConnection();
      }
    }
  });
