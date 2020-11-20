const route = require('express').Router();
const categoryModel = require('./category.model');

//GET categories
route.get('/session/:sessionID', async (req, res) => {
    const sessionID = req.params.sessionID
    try {
        const categories = await categoryModel.getCategoryBySession(sessionID)
        res.status(200).json(categories)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//FIND a category
route.get('/:categoryID', async (req, res) => {
    const categoryID = req.params.categoryID
    try {
        const category = await categoryModel.findACategory(categoryID)
        res.status(200).json(category)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD category
route.post('/', async (req, res) => {
    const category = req.body
    try {
        const respondId = await categoryModel.addCategory(category)
        res.status(200).json(respondId)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE category
route.patch('/:categoryId', async (req, res) => {
    const categoryId = req.params.categoryId
    const change = req.body
    try {
        const count = await categoryModel.updateCategory(change, categoryId)
        res.status(200).json({message: `Updated ${count} category`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

//DELETE category
route.delete('/:categoryId', async (req, res) => {
    const categoryId = req.params.categoryId
    try {
        const count = await categoryModel.deleteCategory(categoryId)
        res.status(200).json({message: `Deleted ${count} category`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;