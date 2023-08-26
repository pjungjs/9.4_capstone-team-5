// DEPENDENCIES
const cors = require('cors');
const express = require('express');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONTROLLERS

// ROUTES
app.get('/', (_, res) => {
  res.status(200).send('Welcome to EcoWay app');
});

app.get('*', (_, res) => {
  res.status(404).send('Page Not Found!');
});

// EXPORT
module.exports = app;
