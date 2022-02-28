const Client = require('../models/clients');

const Loan = require('../models/loan');

const getAll = async ()  =>  await Client.find().populate('accounts');

const getOne = async (id)  => await Client.findById(id).populate('accounts');


const count = async ()  =>  await Client.count();

const save  = async (body)  =>  {

    const clientLoan = new Account({
      amount: body.amount,
      payments: body.payments,
      client: body.client,
      loan: body.loan
    })
  
    const clientLoanSaved = await clientLoan.save();

    
    const client  = await Client.findById(clientLoanSaved.client);
    client.clientLoans.push(clientLoanSaved._id);
    await Client.updateOne({_id: client._id},  {clientLoan:  client.clientLoans});

    const loan  = await Loan.findById(clientLoanSaved.loan);
    loan.clientLoans.push(clientLoanSaved._id);
    await Loan.updateOne({_id: loan._id},  {clientLoans:  loan.clientLoans});
  
    return  clientLoan;
  }

module.exports = {

  getAll,

  getOne,

  count,

  save

}