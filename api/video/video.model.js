const db = require('../../database/dbConfig');

const addVideo = (video) => {
    return db('video')
            .returning('id')
            .insert(video)
            .then(ids => ({id: ids[0]}))
}

const getVideo = (sessionID) => {
    return db('video')
            .where({sessionID: sessionID})
            .first()
            
}

module.exports = {
    addVideo,
    getVideo
}