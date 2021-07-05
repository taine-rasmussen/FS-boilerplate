exports.up = function (knex) {
  return knex.schema.createTable('placeHolder', table => {
    table.increments('id')
    table.string('name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('placeHolder')
}
