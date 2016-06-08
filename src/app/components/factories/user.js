/**
 * Created by Sambo on 07/06/2016.
 */

'use strict';

angular.module('angularFireApp')
  .factory('user', function ($location, authService, ConnectedUser) {

    var user = null;

    function connect() {
      return function (email, password) {
        authService.$authWithPassword({
          email: email,
          password: password
        }).then(function (authData) {
          user = new ConnectedUser(authData.uid, email);
          $location.path('/list');
        }).catch(function (error) {
          console.error("Authentication failed:", error);
        });
      };
    }

    return {
      connect: connect(),
      validConnection: function () {
        if (!user) {

          if (authService.$getAuth()) {
            user = new ConnectedUser(authService.$getAuth().uid, authService.$getAuth().password.email);
          }
          else {
            $location.path('/login')
          }
        }

      },
      isConnected: function () {
        if (user) {
          return user.isConnected()
        }
        return false;
      },
      disconnect: function () {
        if (user) {
          user.disconnect();
        }
      },
      get: function () {
        return user;
      }
    }


  })
  .factory('ConnectedUser', function ($location, authService) {

    function ConnectedUser(uid, email) {
      this.uid = uid;
      this.email = email;
      this.connected = true;
    }

    ConnectedUser.prototype.isConnected = function () {
      return this.connected;
    };

    ConnectedUser.prototype.disconnect = function () {
      authService.$unauth();
      this.uid = '';
      this.email = '';
      this.connected = false;
      $location.path('/login');
    };

    return ConnectedUser;

  })
;
