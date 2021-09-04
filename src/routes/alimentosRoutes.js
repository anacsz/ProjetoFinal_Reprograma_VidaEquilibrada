const express = require("express")
const router = express.Router()
const food = require("../controllers/alimentosController")

router.get("/", food.allFoods)

router.get("/:id", food.getById)

router.get("/:id/tipo", food.tipo)

router.post("/cadastrar", food.cadastrarAlimento);

router.delete("/:id", controller.sumirAlimento)

module.exports = router



