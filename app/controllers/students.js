const mongoose = require('mongoose')
const Student = mongoose.model('Student')

module.exports = {
  load: (req, res, next, id) => {
    Student.findOne({_id: id})
    .then(student => {
      req.student = student
      if (!req.student) return next(new Error('Student not found'))
      next()
    })
    .catch(err => next(err))
  },
  index: (req, res, next) => {
    console.log('student index')
    Student.find({})
    .then(students => res.json(students))
    .catch(err => next(err))
  }
}
