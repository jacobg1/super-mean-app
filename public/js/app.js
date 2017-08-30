/* global angular */

angular.module('studentApp', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  Router
])

function Router ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('studentIndex', {
      url: '/students',
      controller: 'StudentsIndex',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/studentIndex.html'
    })
    .state('studentShow', {
      url: '/students/:id',
      controller: 'StudentShow',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/studentShow.html'
    })

$urlRouterProvider.otherwise('/students')
$locationProvider.html5Mode(true)
}
