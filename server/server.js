// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const lionRouter = require('./lions');


const app = express();
const upload = multer();

app.use(express.static('client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(upload.array());

app.use('/lions', lionRouter);

app.use(function(err, req, res, next) {
  if (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
