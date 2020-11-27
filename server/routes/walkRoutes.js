
const db = require('../db/walksDb')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  // Get map & walklist component
  res.json({})
})

router.get('/completed', (req,res)=>{
  const id = 1
  console.log('got to route')
  db.getCompletedWalks(id)
  .then(completedWalks =>{
    res.json(completedWalks)
  })
  .catch((err)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
  })
})

router.get('/:name', (req, res) => {
  console.log(req.params.name)
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
