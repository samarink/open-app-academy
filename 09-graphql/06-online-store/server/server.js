const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../config/keys').mongoURI;

const app = express();

if (!db) {
  throw new Error('You must provide a string to connect to MongoDB Atlas');
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas successfully'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

module.exports = app;
