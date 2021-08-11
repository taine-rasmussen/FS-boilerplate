exports.up = function (knex) {
  return knex.schema.createTable('Classes', table => {
    table.increments('id')
    table.string('class')
    table.string('age')
    table.string('time')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Classes')
}
