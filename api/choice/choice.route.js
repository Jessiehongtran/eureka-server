const route = require('express').Router();
const choiceModel = require('./choice.model')

//GET choices
route.get('/', async (req,res) => {
    try {
        const choices = await choiceModel.getChoice()
        res.status(200).json(choices)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET choice by choiceID
route.get('/:choiceID', async (req,res) => {
    const choiceID = req.params.choiceID
    try {
        const choice = await choiceModel.getChoiceById(choiceID)
        res.status(200).json(choice)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD choice
route.post('/', async (req,res) => {
    const choice = req.body
    try {
        const responseID = await choiceModel.addChoice(choice)
        res.status(200).json(responseID)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;