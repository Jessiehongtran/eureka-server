const { text } = require('express');
const db = require('../../database/dbConfig');

const getTextBySessionID = (sessionID) => {
    return db('pure_text')
            .where({sessionID: sessionID})
}

const addText = text => {
    return db('pure_text')
            .returning('id')
            .insert(text)
            .then(ids => ({id: ids[0]}))
}

const updateText = (change, textId) => {
    return db('pure_text')
            .where({id: textId})
            .update(change)
} 

module.exports = {
    getTextBySessionID,
    addText,
    updateText
}