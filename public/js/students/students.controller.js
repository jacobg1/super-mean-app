/* global angular */

angular.module('studentApp')
.controller('StudentsController', StudentsCtrl)

StudentsCtrl.$inject = ['Student']

function StudentsCtrl (Student) {
  this.students = Student.query()
}
