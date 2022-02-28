const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({

    number: { type: String, unique: true, required: true },
  
    cardHolder: { type: String, required: true },
  
    type: { type: String, required: true },

    color: { type: String, required: true },

    cvv: { type: String, required: true },
    
    thruDate: { type: Date, default: Date.now },

    fromDate: { type: Date, default: Date.now },

    client: {type: mongoose.Schema.Types.ObjectId, ref: 'client', autopopulate: true}
  
  })

  CardSchema.plugin(require('mongoose-autopopulate'));
  
  module.exports = mongoose.model('card', CardSchema);