const mongoose = require('mongoose');

const clientLoanSchema = new mongoose.Schema({

  amount: { type: Number, required: true },

  payments: { type: Number, required: true },

  client: {type: mongoose.Schema.Types.ObjectId, ref: 'client', autopopulate: true},

  loan: {type: mongoose.Schema.Types.ObjectId, ref: 'loan', autopopulate: true}

})

clientLoanSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('clientLoan', clientLoanSchema);