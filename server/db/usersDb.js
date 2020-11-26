const connection = require('./connection')

// adds a user / registers their account
function createUser (user, db = connection) {
  console.log(user)
  return userExists(user.username, db)
    .then(exists => {
      console.log("then exists");
      if (exists) {
        throw new Error('User exists')
      }
      return null
    })
      
      .then(() => {
        console.log("generate hqash");
        return generateHash(user.password)
        })
      
    .then(passwordHash => {
      console.log("passwordHash");
      return db('users').insert({ username: user.username, hash: passwordHash })
    })
}

 // verify whether user account already exists
function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

// use user's existing data / profile
function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

module.exports = {
  createUser,
  getUserByName,
  userExists
}
