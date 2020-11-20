const db = require('../../database/dbConfig');


const getCategoryBySession = (sessionID) => {
    return db('category')
            .where({sessionID: sessionID})
}

const addCategory = (category) => {
    return db('category')
            .returning('id')
            .insert(category)
            .then(ids => ({id: ids[0]}))
}

const updateCategory = (change, cateId) => {
    return db('category')
            .where({id: cateId})
            .update(change)
}

const deleteCategory = (cateId) => {
    return db('category')
            .where({id: cateId})
            .del()
}

const findACategory = (cateId) => {
    return db('category')
            .where({id: cateId})
}

module.exports = {
    getCategoryBySession,
    addCategory,
    updateCategory,
    deleteCategory,
    findACategory
}