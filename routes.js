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

// GET /questions/:qID
  // Route for returning a specific question
router.get('/:qID', function (req, res) {
  res.json({
    response: "You sent me a GET request for a specific ID " + req.params.qID,
  });
});

// POST /questions/:qID/answers
  // Route for creating an answer
router.post('/:qID/answers', function (req, res) {
  res.json({
    response: "You sent me a POST request to /answers",
    questionId: req.params.qID,
    body: req.body
  });
});


// PUT /questions/:qID/answers/:aID
  // Edit a specific answer
router.put('/:qID/answers/:aID', function (req, res) {
  res.json({
    response: "You sent me a PUT request to a specific answer",
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});


// DELETE /questions/:qID/answers/:aID
  // Delete a specific answer
router.delete('/:qID/answers/:aID', function (req, res) {
  res.json({
    response: "You sent me a DELETE request to a specific answer",
    questionId: req.params.qID,
    answerId: req.params.aID,
  });
});


// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
  // Vote on a specific answer
router.post(
  '/:qID/answers/:aID/vote-:dir',
  // Handling when there is an error (up and down are the only inputs desired)
  function (req, res, next) {
    if (req.params.dir.search(/^(up|down)$/) === -1) {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  },
  // This case is when there are no erros to display
  function (req, res) {
  res.json({
    response: "You sent me a POST request to /vote-" + req.params.dir,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir
  });
});

// Exporting the router
module.exports = router;
