const express = require('express')

const walksDB = require('../db/walksDB')
const usersDB = require('../db/usersDB')
const commentsDB = require('../db/commentsDB')

const router = express.Router()

router.get('/', (req, res) => {
  // Get map & walklist component
  res.json({})
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