exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users_walks').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_walks').insert([
        { user_id: 1, walk_id: 2, completed: true },
        { user_id: 2, walk_id: 3, completed: false },
        { user_id: 2, walk_id: 1, completed: true },
        { user_id: 2, walk_id: 2, completed: true },
        { user_id: 2, walk_id: 4, completed: true },
        { user_id: 2, walk_id: 5, completed: false }
      ])
    })
}
