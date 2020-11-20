const express = require('express');
const app = express();
const cors = require('cors');
const formData = require('express-form-data');

//ROUTES
const moduleRoute = require('./api/module/module.route');
const courseRoute = require('./api/course/course.route');
const sessionRoute = require('./api/session/session.route');
const questionRoute = require('./api/question/question.route');
const choiceRoute = require('./api/choice/choice.route');
const textRoute = require('./api/pure_text/pure_text.route');
const categoryRoute = require('./api/category/category.route');
const imageRoute = require('./api/image/image.route');

app.use(express.json());
app.use(cors());
app.use(formData.parse());
app.use('/course', courseRoute);
app.use('/session', sessionRoute);
app.use('/question', questionRoute);
app.use('/choice', choiceRoute);
app.use('/module', moduleRoute);
app.use('/text', textRoute);
app.use('/category', categoryRoute);
app.use('/image', imageRoute);

module.exports = app;