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
  },
  show: (req, res) => {
    console.log('student show')
    res.json(req.student)
  },
  create: (req, res) => {
    console.log('students create')
    const student = new Student(req.body)
    student.save()
    .then(student => res.json(student))
    .catch((err) => {
      res.json({
        message: 'error creating student',
        errors: [err.toString()]
      })
    })
  },
  update: (req, res) => {
    console.log('student update action')
    const student = req.student
    Object.assign(student, req.student)
    student.save()
    .then(student => res.json(student))
    .catch((err) => {
      res.json({
        message: `Error updating student id: ${student._id}`,
        errors: [err.toString()]
      })
    })
  },
  destroy: (req, res) => {
    console.log('students destroy action')
    req.student.remove()
    .then(_ => res.json({
      message: 'student deleted'
    }))
  }
}
