const express = require('express')
const path = require('path')

const walkRoutes = require('./routes/walkRoutes')
const userRoutes = require('./routes/userRoutes')
const commentRoutes = require('./routes/commentRoutes')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/walks', walkRoutes)
server.use('/api/v1/user', userRoutes)
server.use('/api/v1/comment', commentRoutes)
server.use('/api/v1', authRoutes)

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
