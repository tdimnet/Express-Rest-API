'use strict';

// Import statements
const express = require('express');

// Setting up the express router
const router = express.Router();

// GET /questions
  // Route for returning questions collection
router.get('/', function (req, res) {
  res.json({
    response: "You sent me a GET request"
  });
});

// POST /questions
  // Route for creating questions
router.post('/', function (req, res) {
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

// GET /questions/:id
  // Route for returning a specific question
router.get('/:id', function (req, res) {
  res.json({
    response: "You sent me a GET request for a specific ID " + req.params.id,

  });
});

// Exporting the router
module.exports = router;
