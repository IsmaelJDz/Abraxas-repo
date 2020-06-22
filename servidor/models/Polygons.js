const mongoose = require('mongoose');

const PolygonsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('polygns', PolygonsSchema);
