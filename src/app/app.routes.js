var dependencies = [
  'ionic',
  'home.controller',
  'menu.controller',
  'filter.controller'
];

angular.module('selfy', dependencies)
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "views/menuView.html",
    controller: 'menuController'
  })
  .state('app.home', {
    url: "/home",
    views: {
      'content': {
        templateUrl: "views/homeView.html",
        controller: "homeController"
      }
    }
  })
  .state('app.filter', {
    url: "/filter",
    views: {
      'content': {
        templateUrl: "views/filterView.html",
        controller: "filterController"
      }
    }
  });

  $urlRouterProvider.otherwise('/app/filter');
}]);