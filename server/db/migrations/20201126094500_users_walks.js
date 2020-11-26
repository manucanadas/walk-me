exports.up = function (knex) {
  return knex.schema.createTable('users_walks', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('walk_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users_walks')
}
