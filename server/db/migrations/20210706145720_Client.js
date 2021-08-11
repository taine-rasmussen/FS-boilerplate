exports.up = function (knex) {
    return knex.schema.createTable('Clients', table => {
      table.increments('id')
      table.string('firstName')
      table.string('lastName')
      table.string('age')
      table.string('phonePrimary')
      table.string('phoneSecondary')
      table.string('email')
      table.string('address')
      table.string('medical')
      table.string('userType')
      table.string('classes')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Clients')
  }
