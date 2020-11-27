const connection = require('./connection')

function getAllWalks (db = connection) {
  return db('walks').select()
}

function getWalkComments (id, db = connection) {
  return db('comments')
    .where('walk_id', id)
    .select()
}

function getSavedWalksByUser (id, db = connection) {
  return db('users_walks')
    .where('user_id', id)
    .where('users_walks.completed', false)
    .select()
}

// gets individual walk details & comments
function getWalk (db = connection) {

}

module.exports = {
  getAllWalks,
  getWalkComments,
  getWalk,
  getSavedWalksByUser
}
