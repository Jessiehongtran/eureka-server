const route = require('express').Router();
const textModel = require('./pure_text.model');

//GET text
route.get('/', async (req, res) => {
    try {
        const text = await textModel.getText()
        res.status(200).json(text)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD text
route.post('/', async (req, res) => {
    const textToPost = req.body
    try {
        const respondId = await textModel.addText(textToPost)
        res.status(200).json(respondId)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE text
route.patch('/:textId', async (req, res) => {
    const change = req.body
    const textId = req.params.textId

    try {
        const count = await textModel.updateText(change, textId)
        res.status(200).json({message: `Updated ${count} text`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;