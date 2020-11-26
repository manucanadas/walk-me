const connection = require('./connection')

function getAllWalks (db = connection) {
  return db('walks').select()
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
