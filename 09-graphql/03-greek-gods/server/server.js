const express = require('express');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
const bodyParser = require('body-parser');

const app = express();

if (!db) {
  throw new Error('You must provide string to connect to MonngoDB Atlas');
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MonngoDB successfully'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

module.exports = app;
