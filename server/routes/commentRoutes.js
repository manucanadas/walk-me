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

// router.get('/', (req, res) => {
//   // Get map & walklist component
//   res.json({})
// })

// router.get('/:name', (req, res) => {
//   // Get for walk component
//   res.json({})
// })

// // These two may not need req.id, in here just in case
// router.get('/saved/:id', (req, res) => {
//   // Get saved walks from db for savedWalks component
//   res.json({})
// })

// // These two may not need req.id, in here just in case
// router.post('/saved/:id', (req, res) => {
//   // Post to db for savedWalks component
//   res.json({})
// })

module.exports = router
