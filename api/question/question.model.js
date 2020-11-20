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

const getQuestionOfASession = (sessionID) => {
    return db('question')
            .where({sessionID: sessionID})
            .first()
}

const getQuestionById = (questionID) => {
    return db('question')
            .where({id: questionID})
            .first()
}

const updateQuestion = (change, questionID) => {
    return db('question')
            .where({id: questionID})
            .update(change)
}

const deleteQuestion = (questionID) => {
    return db('question')
            .where({id: questionID})
            .del()
}

const getQuestionBySessionId = (sessionID) => {
    return db('question as q')
            .where({sessionID: sessionID})
            .first()
}


module.exports = {
    addQuestion,
    getQuestions,
    getQuestionById,
    updateQuestion,
    getQuestionBySessionId,
    deleteQuestion,
    getQuestionOfASession
}