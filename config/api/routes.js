const express = require('express')

const router = express.Router()
const students = require('../../app/controllers/students')

module.exports = router

router.param('studentId', students.load)

router.get('/students', students.index)
// router.post('/students', students.create)
// router.get('/students/:studentId', students.show)
// router.put('/students/:studentId', students.update)
// router.delete('/students/:studentId', students.destroy)

router.use(function (err, req, res, next) {
  if (err.message &&
    (~err.message.indexOf('not found') ||
    (~err.message.indexOf('Cast to ObjectId failed')))) {
    return next()
  }
  console.error(err.stack)

  res.status(500).json({
    message: 'internal server error',
    error: err.stack
  })
})

router.use(function (req, res) {
  const payload = {
    url: req.originalUrl,
    error: 'Not found'
  }
  return res.status(404).json(payload)
})
