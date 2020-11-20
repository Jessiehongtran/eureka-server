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

const getChoiceOfASession = (sessionID) => {
    return db('choice')
            .where({sessionID: sessionID})
}

const getChoiceById = (choiceID) => {
    return db('choice')
            .where({id: choiceID})
            .first()
}

const updateChoice = (change, choiceID) => {
    return db('choice')
            .where({id: choiceID})
            .update(change)
}

module.exports = {
    addChoice,
    getChoice,
    getChoiceById,
    updateChoice,
    getChoiceOfASession
}