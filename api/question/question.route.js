const route = require('express').Router();
const questionModel = require('./question.model');

//GET questions
route.get('/', async (req,res) => {
    try {
        const questions = await questionModel.getQuestions()
        res.status(200).json(questions)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET question by questionID
route.get('/:questionID', async (req,res) => {
    const questionID = req.params.questionID
    try {
        const question = await questionModel.getQuestionById(questionID)
        res.status(200).json(question)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//POST question
route.post('/', async (req,res) => {
    const question = req.body
    try {
        const respondID = await questionModel.addQuestion(question)
        res.status(200).json(respondID)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;