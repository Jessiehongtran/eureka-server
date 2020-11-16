const db = require('../../database/dbConfig');


const getCategory = () => {
    return db('category')
}

const addCategory = (category) => {
    return db('category')
            .returning('id')
            .insert(category)
            .then(ids => ({id: ids[0]}))
}

const updateCategory = (change, cateId) => {
    return db('category')
            .where({id: categId})
            .update(change)
}

const deleteCategory = (cateId) => {
    return db('category')
            .where({id: cateId})
            .del()
}

module.exports = {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}