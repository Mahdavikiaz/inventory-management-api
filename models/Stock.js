const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  last_update: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Stock', stockSchema);
