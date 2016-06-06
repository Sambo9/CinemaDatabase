(function() {
  'use strict';

  angular
    .module('angularFireApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListController',
        controllerAs: 'list'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateController',
        controllerAs: 'create'
      })
      .when('/update/:id', {
        templateUrl: 'views/update.html',
        controller: 'UpdateController',
        controllerAs: 'update'
      })
      .otherwise({
        redirectTo: '/list'
      });
  }

})();
