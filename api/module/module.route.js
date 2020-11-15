const route = require('express').Router();
const moduleModel = require('./module.model');

//GET modules
route.get('/', async (req,res) => {
    try {
        const models = await moduleModel.getModules()
        res.status(200).json(models)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD a new module
route.post('/', async (req,res) => {
    const newModule = req.body;
    try {
        const respondID = await moduleModel.addModule(newModule);
        res.status(200).json(respondID)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;