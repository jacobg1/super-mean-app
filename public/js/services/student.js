/* global angular */

angular.module('studentApp')
.factory('Student', student)

student.$inject = ['$resource']

function student ($resource) {
  return $resource('/api/students/:id', {}, {
    update: {method: 'PUT'}
  })
}
