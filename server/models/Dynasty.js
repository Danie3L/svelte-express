const mongoose = require('mongoose');

const DynastySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const DynastyModel = mongoose.model('dynasties', DynastySchema);
module.exports = DynastyModel;
