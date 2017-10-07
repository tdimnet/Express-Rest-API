'use strict';

// Import statements
const express = require('express');

// Set up the express app
const app = express();


app.use(function(req, res, next) {
  console.log('The leaves on the trees are ', req.query.color);
  next();
});


// Set up the port
const port = process.env.PORT || 3000;

// Running the app
app.listen(port, function () {
  console.log('Magic Happens on port', port);
});
