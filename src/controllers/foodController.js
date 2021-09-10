const mongoose = require("mongoose");
const foodSchema = require("../models/foodSchema")

const getAll = async (req, res) => {
  const alimentos = await foodSchema.find()
  res.json(alimentos)
}

const create =  async (req,res) => {
  const food = new foodSchema({
      _id: new mongoose.Types.ObjectId(),
      alimento: req.body.alimento,
      tipo: req.body.tipo,
      carboidrato: req.body.carboidrato,
      quantidade: req.body.quantidade,
      medida: req.body.medida,

  })
  try { 
    if(food.alimento === food.alimento){
      return res.status(404).json({message:'Alimento já cadastrado'})
    }
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

const updateFood = async (req, res) => {
  try {
      const food = await foodSchema.findById(req.params.id)
      if(food == null) {
          return res.status(404).json({message: 'Alimento nao encontrado'})
      }
      
      if (req.body.alimento != null) {
          food.alimento = req.body.alimento
      }
      if (req.body.tipo != null) {
          food.tipo = req.body.tipo
      }
      if (req.body.carboidrato != null) {
          food.carboidrato = req.body.carboidrato
      }
      if (req.body.quantidade != null) {
          food.quantidade = req.body.quantidade
      }
      if (req.body.medida != null) {
        food.medida = req.body.medida
    }
      
      const foodAtualizado = await food.save()
      res.json(foodAtualizado)

  } catch (error) {
      res.status(500).json({ message: error.message })
  }
}

const deleteFood = async (req, res) => {
  try{
    const food = await foodSchema.findById(req.params.id)
    if(food == null){
      return res.status(404).json({message: 'Alimento não encontrado'})
    }
    await food.remove()
    res.json({message: 'Alimento deletado com sucesso'})
  } catch(error){
    res.status(500).json({message: 'error.message'})
  }
}



module.exports = {
  getAll,
  create,
  getById,
  updateFood,
  deleteFood
}