'use strict';

// Import statements
const express = require('express');

// Set up the express app
const app = express();

// Set up the port
const port = process.env.PORT || 3000;

// Running the app
app.listen(port, function () {
  console.log('Magic Happens on port', port);
});
