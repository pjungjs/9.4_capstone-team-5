// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const logger = require('morgan');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// CONTROLLERS
const usersControllers = require('./controllers/usersControllers.js');
const badgesControllers = require('./controllers/badgesControllers.js');
const questionsControllers = require('./controllers/questionsControllers.js');
const postsControllers = require('./controllers/postsControllers.js');

app.use('/users', usersControllers);
app.use('/badges', badgesControllers);
app.use('/questions', questionsControllers);
app.use('/posts', postsControllers);

const imageCloud = require('./s3/imageCloud.js');
app.use('/image-cloud', imageCloud);

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Welcome to EcoWay app');
});

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found!');
});

// EXPORT
module.exports = app;
