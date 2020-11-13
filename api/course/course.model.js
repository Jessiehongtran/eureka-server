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


module.exports = {
    addCourse,
    getCourses,
    getCourseById
}