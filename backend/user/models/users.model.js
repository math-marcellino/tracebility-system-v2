const mongoose = require('mongoose')
const Roles = require('./roles.model')

const UsersSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  nama_lengkap:{
    type: String,
    required: true
  },
  role:{
    type: Roles.schema,
    required: true
  },
  password:{
    type: String,
    required: true
  }
})

const Users = mongoose.model('users', UsersSchema)
module.exports = Users



