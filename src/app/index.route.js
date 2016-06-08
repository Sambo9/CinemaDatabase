(function() {
  'use strict';

  angular
    .module('angularFireApp')
    .run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === "AUTH_REQUIRED") {
        $location.path("/login");
      }
    });
  }]);

  angular
    .module('angularFireApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        resolve: {
          "currentAuth": ["authService", function(Auth) {
            return Auth.$requireAuth();
          }]
        }

      })
      .when('/create', {
        templateUrl: 'app/create/create.html',
        controller: 'CreateController',
        resolve: {
          "currentAuth": ["authService", function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })
      .when('/update/:id', {
        templateUrl: 'app/update/update.html',
        controller: 'UpdateController',
        resolve: {
          "currentAuth": ["authService", function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })
      .when('/login', {
          templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/list'
      });
  }

})();
