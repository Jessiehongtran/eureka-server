const db = require('../../database/dbConfig');

const addQuestion = (question) => {
    return db('question')
            .returning('id')
            .insert(question)
            .then(ids => ({id: ids[0]}))
}

const getQuestions = () => {
    return db('question')
}

const getQuestionById = (questionID) => {
    return db('question')
            .where({id: questionID})
            .first()
}

module.exports = {
    addQuestion,
    getQuestions,
    getQuestionById
}