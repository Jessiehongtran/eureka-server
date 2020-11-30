const route = require('express').Router();
const videoModel = require('./video.model');
const aws = require('aws-sdk');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

//config aws with your accessKeyId and your secretAccessKey
aws.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET  
})


//POST video
route.post('/session/:sessionID', async (req, res) => {
    const sessionID = req.params.sessionID;
    const file = Object.values(req.files)[0];
    const s3 = new aws.S3(); //create a new instance of S3
    const fileName = `${file.name}/${uuidv4()}`;
    const fileType = file.type;
    const path = file.path;

    //set up the payload of what we are sending to the S3 api
    const s3Params = {
        Bucket: process.env.Bucket,
        Key: fileName,
        Expires: 500,
        ContentType: fileType,
        ACL: 'public-read',
        Body: fs.readFileSync(path)
    }


    s3.upload(s3Params, async (err, data) => {
        if (err){
            throw err;
        }
        console.log('success', data)

        const uploadedVideo = {
            video_url: data.Location,
            sessionID: sessionID
        }
        try {
            await videoModel.addVideo(uploadedVideo)
            res.status(200).json(data)
        } catch (err){
            res.status(500).json(err.message)
        }
    })
})

//GET video
route.get('/session/:sessionID', async (req, res) => {
    const sessionID = req.params.sessionID;
    try {
        const response = await videoModel.getVideo(sessionID)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route