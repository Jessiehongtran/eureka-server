const db = require('../../database/dbConfig');

const getModules = () => {
    return db('module')
}

const addModule = module => {
    return db('module')
            .returning('id')
            .insert(module)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    getModules,
    addModule
}