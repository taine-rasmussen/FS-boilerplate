const express = require('express')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

const clientRoutes = require('./routes/clients')
//const artistRoutes = require('./routes/artists')

server.use('/api/v1/clients', clientRoutes)
//server.use('/api/v1/artists', artistRoutes)

module.exports = server
