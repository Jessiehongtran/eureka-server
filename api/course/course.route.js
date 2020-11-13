const route = require('express').Router();
const courseModel = require('./course.model')

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

//ADD course
route.post('/', async (req,res) => {
    const course = req.body
    try {
        const respondID = await courseModel.addCourse(course)
        res.status(200).json(respondID)
    } catch (err){
        res.status(500).json(err.message)
    }
})


module.exports = route;

