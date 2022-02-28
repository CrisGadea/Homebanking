const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({

  name: { type: String, unique: true, required: true },

  payments: { type: Number, required: true },

  maxAmount: {type: Number, required: true},

  clientLoans: {type: mongoose.Schema.Types.ObjectId, ref: 'clientLoan', autopopulate: true}

})

module.exports = mongoose.model('loan', loanSchema);