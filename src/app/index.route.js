(function() {
  'use strict';

  angular
    .module('angularFireApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'views/list.template.html',
        controller: 'ListController'
      })
      .when('/create', {
        templateUrl: 'views/create.template.html',
        controller: 'CreateController'
      })
      .when('/update/:id', {
        templateUrl: 'views/update.template.html',
        controller: 'UpdateController'
      })
      .when('/login', {
          templateUrl: 'views/login.template.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

})();
