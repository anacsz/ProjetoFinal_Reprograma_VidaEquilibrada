const mongoose = require('mongoose')

const alimentoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObejectId,
    nome:{
        type: String,
        required: true,
    },
    criadoEm:{
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('alimento', alimentoSchema)