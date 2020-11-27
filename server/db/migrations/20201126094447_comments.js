exports.up = knex => {
  return knex.schema.createTable('comments', table => {
    table.increments('id')
    table.bigInteger('date')
    table.integer('user_id')
    table.text('text')
    table.text('img')
    table.integer('enjoyment')
    table.integer('walk_id')
    table.boolean('flagged')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('comments')
}
