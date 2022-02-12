const route = require('express').Router();
const courseModel = require('./course.model');
const questionModel = require('../question/question.model');
const textModel = require('../pure_text/pure_text.model');

//GET courses
route.get('/', async (req,res) => {
    try {
        const courses = await courseModel.getCourses()
        res.status(200).json(courses)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET course by courseID
route.get('/:courseID', async (req, res) => {
    const courseID = req.params.courseID
    try {
        const course = await courseModel.getCourseById(courseID)
        res.status(200).json(course)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE COURSE
route.patch('/:courseID', async (req, res) => {
    const courseID = req.params.courseID;
    const change = req.body;
    try {
        const count = await courseModel.updateCourse(change, courseID)
        res.status(200).json({message: `Updated ${count} course`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD course
route.post('/', async (req, res) => {
    const course = req.body
    try {
        const respondID = await courseModel.addCourse(course)
        res.status(200).json(respondID)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET content of a course
route.get('/content/:courseID', async (req, res) => {
    const courseID = req.params.courseID
    try {
        let sessions = await courseModel.getSessionOfACourse(courseID)
        for (let i = 0; i < sessions.length; i++){
            try {
                //if there is this session in this table, get content of it
                sessions[i].question = await questionModel.getQuestionBySessionId(sessions[i].sessionID)

            } catch (err){

            }
        }
        res.status(200).json(sessions)

    } catch (err){
        res.status(500).json(err.message)
    }
})


module.exports = route;

