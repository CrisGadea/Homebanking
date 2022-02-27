const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({

    type: { type: String },
  
    date: { type: Date, default: Date.now },
  
    amount: { type: Number, default: 0 },

    description: {type: String, default: ""}
  
  })
  
  module.exports = mongoose.model('transaction', TransactionSchema);