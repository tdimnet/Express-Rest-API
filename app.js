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

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/qa');

const db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection error', err);
});

db.once('open', function() {
  console.log('db connection successful');
});

// Set up the router and the entry point: /questions
app.use('/questions', routes);

// Catching up 404 erros
app.use(function (req, res, next) {
  const err = new Error('Not found!');
  err.status = 404;
  next(err);
});

// Error Handler
app.use(function (err, req, res, next) {
  res.status(err.status  || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});


// Set up the port
const port = process.env.PORT || 3000;

// Running the app
app.listen(port, function () {
  console.log('Magic Happens on port', port);
});
