const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
  name: {
    type: String,
    defaults: '',
    trim: true
  },
  age: {
    type: String,
    defaults: '',
    trim: true
  },
  photo: {
    type: String,
    defaults: '',
    trim: true
  },
  enrolled: Boolean
})

mongoose.model('Student', StudentSchema)
