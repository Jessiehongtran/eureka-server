const route = require('express').Router();
const sessionModel = require('./session.model')

//GET sessions
route.get('/', async (req,res) => {
    try {
        const sessions = await sessionModel.getSessions()
        res.status(200).json(sessions)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET session by ID
route.get('/:sessionID', async (req,res) => {
    const sessionID = req.params.sessionID
    try {
        const session = await sessionModel.getSessionById(sessionID)
        res.status(200).json(session)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD session
route.post('/', async (req,res) => {
    const session = req.body
    try {
        const responseID = await sessionModel.addSession(session)
        res.status(200).json(responseID)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE a session


module.exports = route;