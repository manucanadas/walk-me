exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_walks').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_walks').insert([
        { id: 1, user_id: 1, walk_id: 2 },
        { id: 2, user_id: 2, walk_id: 3 },
        { id: 3, user_id: 3, walk_id: 1 }
      ])
    })
}
