exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')
    table.text('hash')
    table.string('email')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
