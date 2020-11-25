
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('walks').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: '', description: '', duration: 9, distance: 10, suburb: '', difficulty: 8, path: '', img: '', coords: ''},
        {id: 2, title: '', description: '', duration: 9, distance: 10, suburb: '', difficulty: 8, path: '', img: '', coords: ''},
        {id: 3, title: '', description: '', duration: 9, distance: 10, suburb: '', difficulty: 8, path: '', img: '', coords: ''}
      ]);
    });
};
