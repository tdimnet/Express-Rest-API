'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sandbox');

const db = mongoose.connection;

db.on('error', function(err) {
  console.error('connection error', err);
});

db.once('open', function() {
  console.log('db connection successful');
  // All database communcation goes here
  var Schema = mongoose.Schema;
  var AnimalSchema = new Schema({});


  db.close();
});
