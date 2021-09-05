const express = require('express')
const router = express.Router()
const controller = require('../controllers/foodController')

router.get("/oi", (req, resp)=>{
     resp.status(200).send({"mensagem":"testando rota "})
 })
router.get("/", controller.getAll )
router.get("/:id", controller.getById )

router.post("/cadastrar", controller.create)


module.exports = router