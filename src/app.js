const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3333


const database = require('../src/data/database')
database.connect()

app.use(express.json())
app.use(cors())

module.exports = app