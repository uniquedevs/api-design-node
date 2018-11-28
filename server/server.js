// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const applyMiddleware = require('./middleware/appMiddleware');
const api = require('./api/api');

const app = express();

applyMiddleware(app);

app.use('/api/', api);

app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
