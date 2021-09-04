const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URI

const connect = () => {mongoose.connect(MONGODB_URL || 'mongodb://localhost:27017/vidaEquilibrada',{
    useNewUrlParse: true,
    useUnifiedTopology: true
})
    .then(console.log('Database conectada com sucesso'))
    .catch(err => console.err)
}

module.exports = {connect}