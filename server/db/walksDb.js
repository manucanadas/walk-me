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

module.exports = {
  getAllWalks,
  getWalkComments,
  getWalk,
  getSavedWalksByUser
}
