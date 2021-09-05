const express = require('express')
const cors = require('cors')
const database = require('../src/data/database')

const index = require('./routes/index')
const foods = require('./routes/alimentoRoutes')


//const PORT = process.env.PORT || 3333

database.connect()

const app = express()

app.use(cors())
app.use(express.json())


app.use('/', index)
app.use('/foods', foods)


module.exports = app