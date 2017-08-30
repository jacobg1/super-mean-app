/* global angular */

angular
.module('studentApp')
.controller('StudentsIndex', StudentsCtrl)

StudentsCtrl.$inject = ['Student']

function StudentsCtrl (Student) {
  this.students = Student.query()
}
