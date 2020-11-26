const connection = require('./connection')

function getWalks (db = connection) {

}

// gets individual walk details & comments
function getWalk (db = connection) {

}

function getSavedWalksByUser (db = connection) {

}
module.exports = {
  getWalks,
  getWalk,
  getSavedWalksByUser
}
