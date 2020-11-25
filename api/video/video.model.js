const db = require('../../database/dbConfig');

const addVideo = (video) => {
    return db('video')
            .returning('id')
            .insert(video)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    addVideo
}