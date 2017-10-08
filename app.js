'use strict';

// Import statements
const express     = require('express');
// Set up the express app
const app         = express();
// Import the route endpoints
const routes      = require('./routes');
// Import body parser and logger
const jsonParser  = require('body-parser').json;
const logger      = require('morgan');


// Set up logger and body parser (for json encode)
app.use(logger('dev'));
app.use(jsonParser());

// Set up the router and the entry point: /questions
app.use('/questions', routes);

// Set up the port
const port = process.env.PORT || 3000;

// Running the app
app.listen(port, function () {
  console.log('Magic Happens on port', port);
});
