const express = require('express')

const router = express.Router()

const db = require('../db/commentsDb')

router.post('/', (req, res) => {
  const reformattedPerson = {
    date: new Date().getTime(),
    user_id: req.body.userId,
    text: req.body.text,
    img: null,
    enjoyment: req.body.enjoyment,
    walk_id: req.body.walkId,
    flagged: false
  }

  return db.addCommentToWalk(reformattedPerson)
    .then(res.json({}))
})

module.exports = router
