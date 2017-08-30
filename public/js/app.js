/* global angular */

angular.module('studentApp', [
  'ngResource',
  'ui.router'
]).config(['$stateProvider', function ($stateProvider) {
  console.log($stateProvider)
}])
