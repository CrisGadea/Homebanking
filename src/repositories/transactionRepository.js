const Transaction = require('../models/transaction');
const TransactionType = require('../models/transactionTypes');

const getAll = async () => await Transaction.find(); 
const getOne = async (id) => await Transaction.findById(id);
const count = async () => await Transaction.count();

const save  = async (body)  =>  {

    const transaction = new Transaction({
      type: TransactionType.DEBIT,
      amount: body.amount,
      description: body.description
    })
  
    return await transaction.save();

  }

  module.exports = {
      save,
      getAll,
      getOne,
      count
  }