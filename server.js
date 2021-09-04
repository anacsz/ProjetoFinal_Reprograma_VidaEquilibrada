const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 3333

const db = require('./src/data/database')
db.connect()

app.use(express.json())



