const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();

const applyMiddleware = app => {
  app.use(express.static('client'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(upload.array());
};

module.exports = applyMiddleware;