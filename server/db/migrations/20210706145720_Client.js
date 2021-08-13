exports.up = function (knex) {
    return knex.schema.createTable('Clients', table => {
      table.increments('id')
      table.string('firstName')
      table.string('lastName')
      table.string('dob')
      table.string('age')
      table.string('medicalNeeds')
      table.string('contactOneName')
      table.string('contactOneNumber')
      table.string('contactTwoName')
      table.string('contactTwoNumber')
      table.string('email')
      table.string('how')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('Clients')
  }
