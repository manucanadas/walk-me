const connection = require('./connection')

function getAllWalks (db = connection) {
  return db('walks')
  .join('comments', 'walks.id', 'walk_id')
  .select('*', 'walks.id AS id')
}

// gets individual walk details & comments
function getWalk (db = connection) {

}

function getSavedWalksByUser (db = connection) {

}

module.exports = {
  getAllWalks,
  getWalk,
  getSavedWalksByUser
}
