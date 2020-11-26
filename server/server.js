const express = require('express')
const path = require('path')

const walkRoutes = require('./routes/walkRoutes')
const userRoutes = require('./routes/userRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/walks', walkRoutes)
server.use('/api/v1/user', userRoutes)

module.exports = server
