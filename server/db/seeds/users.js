const {generateHash} = require('authenticare/server')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(()=> Promise.all([
    generateHash('kathy'),
    generateHash('susy'),
    generateHash('johnny')
  ]))
    .then(([kathyHash, susyHash, johnnyHash])=> 
      // Inserts seed entries
       knex('users').insert([
        {id: 1, username:'kathy', hash: kathyHash, email: 'koolkathy@hotmail.com'},
        {id: 2, username:'susy', hash: susyHash, email: 'susy@yahoo.com'},
        {id: 3, username:'johnny', hash: johnnyHash, email: 'johnny@gmail.com'}
      ])
    )
}
