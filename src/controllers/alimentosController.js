const { response } = require("express");
const { request } = require("../app");
const alimentosJson = require("../models/alimentos.json");

const allFoods = (request, response) => {
    response.status(200).send(alimentosJson)
}






module.exports = {
    allFoods,
    getById,
    tipo,
    cadastrarAlimento,
    sumirAlimento
}