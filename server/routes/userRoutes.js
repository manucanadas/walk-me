const express = require('express')

const db = require('../db/usersDb')


const router = express.Router()

router.get('/login', (req, res) => {
  // Get all info from db, about user that logs in
  res.json({})
})


router.post('/register', (req, res) => {
  // Post new user to db, from register component
  res.json({})
})

module.exports = router