const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObejectId,
    alimento:{type: String, required: true,},
    tipo:{type: String,required: true,},
    carboidrato:{type: Number,required: true,},
    quantidade:{type: Number,required: true,},
    medida:{type: String,required: true}
});


module.exports = mongoose.model('food', foodSchema);
