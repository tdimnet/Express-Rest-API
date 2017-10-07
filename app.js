'use strict';

// Import statements
const express     = require('express');
const jsonParser  = require('body-parser').json;
const routes      = require('./routes');

// Set up the express app
const app = express();

// Set up the body parser
app.use(jsonParser());

// Set up the router and the entry point: /questions
app.use('/questions', routes);

// Set up the port
const port = process.env.PORT || 3000;

// Running the app
app.listen(port, function () {
  console.log('Magic Happens on port', port);
});
