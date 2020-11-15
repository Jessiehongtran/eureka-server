const db = require('../../database/dbConfig');

const addCourse = (course) => {
    return db('course_pager')
            .returning('id')
            .insert(course)
            .then(ids => ({id: ids[0]}))
}

const getCourses = () => {
    return db('course_pager as c')
            .join('user as u', 'u.id', 'c.userID')
            .select(
                'c.*',
                'u.email as user_email'
            )
}

const getCourseById = (courseID) => {
    return db('course_pager as c')
            .where('c.id', courseID)
            .join('user as u', 'u.id', 'c.userID')
            .select(
                'c.*',
                'u.email as user_email'
            )
            .first()
}

const getSessionOfACourse = (courseID) => {
    return db('session as s')
            .where('s.courseID', courseID)
            .join('module as m', 'm.id', 's.moduleID')
            .select(
                's.id as sessionID',
                's.courseID',
                's.moduleID',
                's.order_number',
                'm.module_name'
            )
}


module.exports = {
    addCourse,
    getCourses,
    getCourseById,
    getSessionOfACourse
}