const express = require('express')
const app = express()
const cors = require('cors')

//ROUTES
const courseRoute = require('./api/course/course.route');
const sessionRoute = require('./api/session/session.route');
const questionRoute = require('./api/question/question.route');
const choiceRoute = require('./api/choice/choice.route');

app.use(express.json());
app.use(cors());
app.use('/course', courseRoute);
app.use('/session', sessionRoute);
app.use('/question', questionRoute);
app.use('/choice', choiceRoute);

module.exports = app;