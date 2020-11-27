const express = require('express')

const router = express.Router()
const db = require('../db/walksDb')

router.get('/', (req, res) => {
  return db.getAllWalks()
    .then(walks => {
      walks = walks.map(walk => {
        return db.getWalkComments(walk.id)
          .then(comments => {
            walk.comments = comments
            return walk
          })
      })
      return Promise.all(walks)
    })
    .then(walks => res.json(walks))
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
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
