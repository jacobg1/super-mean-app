/* global angular */

angular.module('studentApp')
.controller('StudentShow', [
  '$stateParams',
  'Student',
  StudentShow
])

function StudentShow ($stateParams, Student) {
  this.student = Student.get({id: $stateParams.id})
  console.log(this.student);
}
