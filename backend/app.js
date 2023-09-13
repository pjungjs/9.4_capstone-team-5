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

app.use('/users', usersControllers);
app.use('/badges', badgesControllers); // /badges is the prefix for all routes in badgesControllers file
app.use('/questions', questionsControllers)

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Welcome to EcoWay app');
});

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found!');
});

// EXPORT
module.exports = app;
