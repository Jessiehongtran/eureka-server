const db = require('../../database/dbConfig');

const getImageBySession = sessionID => {
    return db('image')
            .where({sessionID: sessionID})
            
}

const addImage = (image) => {
    return db('image')
            .returning('id')
            .insert(image)
            .then(ids => ({id: ids[0]}))
}

const deleteImage = (imageID) => {
    return db('image')
            .where({id: imageID})
            .del()
} 

module.exports = {
    getImageBySession,
    addImage,
    deleteImage
}