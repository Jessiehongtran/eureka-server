const route = require('express').Router();
const aws = require('aws-sdk');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

//config aws with your accessKeyId and your secretAccessKey
aws.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET  
})

route.post('/session/:sessionID', (req, res) => {
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

    s3.upload(s3Params, function(err, data) {
        if (err){
            throw err;
        }
        console.log('success', data)
        res.status(200).json(data)
    })
})

module.exports = route