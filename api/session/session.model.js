const db = require('../../database/dbConfig');

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
                's.*',
                'c.*',
                'm.*',
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
                's.*',
                'c.*',
                'm.*',
                'u.email as user_email'
            )
            .first()
}

module.exports = {
    addSession,
    getSessions,
    getSessionById
}