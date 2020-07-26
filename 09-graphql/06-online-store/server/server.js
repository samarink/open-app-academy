const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../config/keys').mongoURI;
require('./models/index');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const app = express();

if (!db) {
  throw new Error('You must provide a string to connect to MongoDB Atlas');
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas successfully'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

module.exports = app;
