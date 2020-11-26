exports.up = function (knex) {
  return knex.schema.createTable('walks_tags', table => {
    table.increments('id')
    table.integer('walk_id')
    table.integer('tag_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('walks_tags')
}
