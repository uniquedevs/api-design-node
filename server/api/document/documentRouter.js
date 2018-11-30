const router = require('express').Router();
const mongoose = require('mongoose');
const Document = require('./DocumentModel');

router.route('/')
  .get((req, res) => {
    Document.find({})
      .populate('users')
      .exec()
      .then( docs => res.send(docs))
  });

module.exports = router;