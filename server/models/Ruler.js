const mongoose = require('mongoose');

const RulerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dynasty_id: {
    type: Number,
    required: true,
  },
});

const RulerModel = mongoose.model('rulers', RulerSchema);
module.exports = RulerModel;
