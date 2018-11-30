const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
  name: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

const DocumentModel = mongoose.model('document', DocumentSchema);

module.exports = DocumentModel;
