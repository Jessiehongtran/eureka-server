const route = require('express').Router();
const videoModel = require('./video.model');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


route.post('/session/:sessionID', async (req, res) => {
    const sessionID = req.params.sessionID;
    const values = Object.values(req.files);
    console.log('path', values[0].path)
    cloudinary.uploader.upload(values[0].path, function(error, result) {console.log(result, error)});
    // const promises = values.map(video => cloudinary.uploader.upload(video.path));
    // Promise
    //      .all(promises)
    //      .then(videos => {
    //          console.log('videos got back', videos)
    //         const video = {
    //             video_url: videos[0].url,
    //             sessionID: sessionID
    //         }
    //         videoModel.addVideo(video)
    //                   .then(response => {
    //                       response.uploaded_video = videos[0].url
    //                       res.status(200).json(response)
    //                   })
    //                   .catch(err => res.status(500).json(err.message))
    //      })
    //      .catch(err => res.status(500).json(err.message))
})

module.exports = route