const express = require('express')

const router = express.Router()
const db = require('../db/walksDb')

router.get('/', (req, res) => {
  return db.getAllWalks()
    .then(walks => {
      res.json(walks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})


router.get('/:name', (req, res) => {
  // Get for walk component
  res.json({})
})

// These two may not need req.id, in here just in case
router.get('/saved/:id', (req, res) => {
  // Get saved walks from db for savedWalks component
  res.json({})
})

// These two may not need req.id, in here just in case
router.post('/saved/:id', (req, res) => {
  // Post to db for savedWalks component
  res.json({})
})

module.exports = router
