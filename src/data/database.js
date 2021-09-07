require('dotenv').config()
const mongoose = require('mongoose')


const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/conexao-Reprograma'


const connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Conectades ao MongoDb Atlas!')
    })
    .catch((err)=>{
        console.log('Perdão, algo deu errado.')
        console.err(err)
    })
}

module.exports = { connect }