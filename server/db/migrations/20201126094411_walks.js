exports.up = (knex) => {
  return knex.schema.createTable('walks', table => {
    table.increments('id')
    table.string('title')
    table.text('description')
    table.integer('duration')
    table.integer('distance')
    table.string('suburb')
    table.integer('difficulty')
    table.text('path')
    table.text('img')
    table.string('coords')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('walks')
}
