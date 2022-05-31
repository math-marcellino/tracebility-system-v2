const { Model } = require('objection')
const knex = require('../../config/knex.config')
Model.knex(knex)

class Role extends Model {
  static get tableName () {
    return 'role'
  }
}

module.exports = Role
