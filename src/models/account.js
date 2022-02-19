const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({

    number: { type: String, unique: true, required: true },
  
    creationDate: { type: Date, default: Date.now },
  
    balance: { type: Number, default: 0 },

    client: {type: mongoose.Schema.Types.ObjectId, ref: 'client'}
  
  })
  
  module.exports = mongoose.model('account', AccountSchema);