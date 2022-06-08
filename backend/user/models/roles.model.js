const mongoose = require('mongoose')

const RolesSchema = mongoose.Schema({
  role: {
    type: String,
    required: true
  }
})
  
const Roles = mongoose.model('roles', RolesSchema)
module.exports = Roles