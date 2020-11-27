const connection = require('./connection')

function addCommentToWalk (comment, db = connection) {
  return db('comments').insert(comment)
}

module.exports = {
  addCommentToWalk
}
