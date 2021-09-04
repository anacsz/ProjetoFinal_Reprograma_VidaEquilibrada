const express = require('express')
const app = express()

const db = require('./src/data/database')
db.connect()

app.use(express.json())

app.listen(3333, () => console.log('Servidor rodando na porta 3333'))

