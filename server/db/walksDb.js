const connection = require('./connection')

function getAllWalks (db = connection) {
  return db('walks').select()
}

function getWalkComments (id, db = connection) {
  return db('comments')
    .where('walk_id', id)
    .select()
}

// gets individual walk details & comments
function getWalk (db = connection) {

}

function getSavedWalksByUser (db = connection) {

}

function getCompletedWalks(id, db=connection){
  console.log('helloooo')
  return db('users_walks')
  .join('walks','walk_id', 'walks.id')
  .select()
  .where('users_walks.user_id', id)
  .where('users_walks.completed', true)

}
module.exports = {
  getAllWalks,
  getWalkComments,
  getWalk,
  getSavedWalksByUser,
  getCompletedWalks
}
