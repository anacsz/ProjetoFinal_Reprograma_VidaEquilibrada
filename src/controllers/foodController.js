const mongoose = require("mongoose");
const foodSchema = require("../models/foodSchema")

const getAll = async (req, res) => {
  const alimentos = await foodSchema.find().populate('food')
  res.json(alimentos)
}

const create =  async (req,res) => {
  const food = new foodSchema({
      //_id: new mongoose.Types.ObjectId(),
      alimento: req.body.alimento,
      tipo: req.body.tipo,
      carboidrato: req.body.carboidrato,
      quantidade: req.body.quantidade,
      medida: req.body.medida,

  })
  try { 
      const newFood = await food.save()
      res.status(201).json(newFood)
  } catch (error) {
      res.status(400).json({ message: error.message })
  }
}

const getById = async (req, res) => {
  try {
      const food = await foodSchema.findById(req.params.id)
      if(food == null) {
          return res.status(404).json({message: 'Alimento nao encontrado'})
      }
      res.json(food)
  } catch (error) {
      res.status(500).json({ message: error.message })

  }
}




module.exports = {
  getAll,
  create,
  getById
}