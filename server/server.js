const express = require('express')
const path = require('path')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


module.exports = server
