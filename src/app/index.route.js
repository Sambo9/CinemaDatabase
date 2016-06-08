(function() {
  'use strict';

  angular
    .module('angularFireApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'app/list/list.html',
        controller: 'ListController'
      })
      .when('/create', {
        templateUrl: 'app/create/create.html',
        controller: 'CreateController'
      })
      .when('/update/:id', {
        templateUrl: 'app/update/update.html',
        controller: 'UpdateController'
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
