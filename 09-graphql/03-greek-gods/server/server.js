const express = require('express');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const models = require('./models');
const schema = require('./schema/schema');
const app = express();

if (!db) {
  throw new Error('You must provide string to connect to MonngoDB Atlas');
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MonngoDB successfully'))
  .catch(err => console.log(err));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

module.exports = app;
