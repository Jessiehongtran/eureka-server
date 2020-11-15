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

//PATCH question
route.patch('/:questionID', async (req,res) => {
    const change = req.body
    const questionID = req.params.questionID
    try {   
        const count = await questionModel.updateQuestion(change, questionID)
        res.status(200).json(`Updated ${count} question`)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET question of a session
route.get('/session/:sessionID', async (req, res) => {
    const sessionID = req.params.sessionID
    try {
        const question = await questionModel.getQuestionBySessionId(sessionID)
        res.status(200).json(question)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//DELETE a question
route.delete('/:questionID', async (req, res) => {
    const questionID = req.params.questionID
    try {
        const count = await questionModel.deleteQuestion(questionID)
        res.status(200).json({message: `Deleted ${count} question`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;