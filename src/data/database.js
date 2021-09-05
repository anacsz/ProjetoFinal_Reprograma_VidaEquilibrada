require('dotenv').config()
const mongoose = require('mongoose')


const MONGODB = process.env.MONGODB_URI || process.env.MONGODB_URL

const connect = () => {mongoose.connect(MONGODB,{
    useNewUrlParse: true,
    useUnifiedTopology: true
})
    .then(console.log('Database conectada com sucesso'))
    .catch(err => console.err)
}

module.exports = {connect}