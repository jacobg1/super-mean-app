const express = require('express')

const router = express.Router()
const students = require('../../app/controllers/students')

module.exports = Router

router.param('studentId', students.load)

router.get('/students', students.index)
router.post('/students', students.create)
router.get('/students/:studentId', students.show)
router.put('/students/:studentId', students.update)
router.delete('/students/:studentId', students.destroy)
