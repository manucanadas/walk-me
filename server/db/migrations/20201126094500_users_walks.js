exports.up = knex => {
  return knex.schema.createTable('users_walks', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('walk_id')
    table.boolean('completed')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('users_walks')
}
