
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('walk_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('walk_tags').insert([
        {id: 1, walk_id: 2, tag_id: 1},
        {id: 2, walk_id: 3, tag_id: 1},
        {id: 3, walk_id: 1, tag_id: 1}
      ]);
    });
};
