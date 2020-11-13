const db = require('../../database/dbConfig');

const addChoice = (choice) => {
    return db('choice')
            .returning('id')
            .insert(choice)
            .then(ids => ({id: ids[0]}))
}

const getChoice = () => {
    return db('choice')
}

const getChoiceById = (choiceID) => {
    return db('choice')
            .where({id: choiceID})
            .first()
}

module.exports = {
    addChoice,
    getChoice,
    getChoiceById
}