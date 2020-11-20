const route = require('express').Router();
const imageModel = require('./image.model');
const cloudinary = require('cloudinary');
require('dotenv').config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

//POST image
route.post('/session/:sessionID', (req, res) => {
    const sessionID = req.params.sessionID;
    const values = Object.values(req.files);
    const promises = values.map(image => cloudinary.uploader.upload(image.path));
    Promise
         .all(promises)
         .then(images => {
            const image = {
                image_url: images[0].url,
                sessionID: sessionID
            }
            imageModel.addImage(image)
                      .then(response => {
                          response.uploaded_img = images[0].url
                          res.status(200).json(response)
                      })
                      .catch(err => res.status(500).json(err.message))
         })
         .catch(err => res.status(500).json(err.message))
})

//GET image of a session
route.get('/session/:sessionID', async (req, res) => {
    const sessionID = req.params.sessionID;
    try {
        const images = await imageModel.getImageBySession(sessionID)
        res.status(200).json(images)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//DELETE image
route.delete('/:imageID', async (req, res) => {
    const imageID = req.params.imageID;
    try {
        const count = await imageModel.deleteImage(imageID)
        res.status(200).json({message: `Deleted ${count} image`})
    } catch (err){
        res.status(500).json(err.message)
    }
})


module.exports = route;