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
const usersController = require('./controllers/usersControllers.js');
const badgesRoutes = require('./controllers/badgesControllers');

app.use('/users', usersController);
app.use('/achievements', badgesRoutes); // /achievements is the prefix for all routes in badgesRoutes file  ')

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Welcome to EcoWay app');
});

app.get('*', (req, res) => {
  res.status(404).send('Page Not Found!');
});

// EXPORT
module.exports = app;
