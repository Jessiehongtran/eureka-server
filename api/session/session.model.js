const db = require('../../database/dbConfig');
const knex = require('knex')

const addSession = (session) => {
    return db('session')
            .returning('id')
            .insert(session)
            .then(ids => ({id: ids[0]}))
}

const getSessions = () => {
    return db('session as s')
            .join('course_pager as c', 'c.id', 's.courseID')
            .join('module as m', 'm.id', 's.moduleID')
            .join('user as u', 'u.id', 'c.userID')
            .select(
                's.id as sessionID',
                's.order_number as order_number',
                'c.id as courseID',
                'm.id as moduleID',
                'm.module_name as module_name',
                'u.email as user_email'
            )
}

const getSessionById = (sessionID) => {
    return db('session as s')
            .where('s.id', sessionID)
            .join('course_pager as c', 'c.id', 's.courseID')
            .join('module as m', 'm.id', 's.moduleID')
            .join('user as u', 'u.id', 'c.userID')
            .select(
                's.id as sessionID',
                's.order_number as order_number',
                'c.id as courseID',
                'm.id as moduleID',
                'm.module_name as module_name',
                'u.email as user_email'
            )
            .first()
}

const getSessionOfACourse = (courseID) => {
    return db('session as s')
            .where('s.courseID', courseID)
            .join('course_pager as c', 'c.id', 's.courseID')
            .join('module as m', 'm.id', 's.moduleID')
            .join('user as u', 'u.id', 'c.userID')
            .select(
                's.id as sessionID',
                's.order_number as order_number',
                'c.id as courseID',
                'm.id as moduleID',
                'm.module_name as module_name',
                'u.email as user_email'
            )
}

const getContentBySession = (sessionID, moduleID) => {                
    if (moduleID == 1){
        return db('session as s')
                .where('s.id', sessionID)
                .join('pure_text as t', 't.sessionID', 's.id')
                .join('category as c', 'c.sessionID', 's.id')
                .select(
                    't.text as header',
                    'c.category_name as category_name',
                )

    } else  if (moduleID == 3){
        return db('session as s')
                .where('s.id', sessionID)
                .join('question as q', 'q.sessionID', 's.id')
                .join('choice as c', 'c.sessionID', 's.id')
                .select(
                    'q.question_text as question_text',
                    'c.choice_text as choice_text'
                )
    }
}

const updateSession = (change, sessionID) => {
    return db('session')
            .where({id: sessionID})
            .update(change)
}

module.exports = {
    addSession,
    getSessions,
    getSessionById,
    getSessionOfACourse,
    getContentBySession,
    updateSession
}