exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        { id: 1, name: 'dogFriendly' }
      ])
    })
}
