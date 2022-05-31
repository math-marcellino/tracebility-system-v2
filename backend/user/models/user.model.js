const { Model } = require('objection')
const knex = require('../../config/knex.config')
Model.knex(knex)

class Users extends Model {
  static get tableName () {
    return 'users'
  }

  static get relationMappings() {
    const Role = require('../models/role.model')

    return {
      relation: Model.HasManyRelation,
      modelClass: Role,
      join: {
        from: 'role.id',
        to: 'users.role'
      }
    }
  }
}

module.exports = Users
