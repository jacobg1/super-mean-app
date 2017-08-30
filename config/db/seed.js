const mongoose = require('mongoose')
const connect = require('./connect')
const studentSeeds = require('./studentSeeds')

const Student = mongoose.model('Student')

connect()
.then(_ => Student.remove({}))
.then(_ => Student.collection.insert(studentSeeds))
.then(students => {
  console.log(students)
  process.exit()
})
.catch((err) => {
  console.log(err)
  process.exit()
})
