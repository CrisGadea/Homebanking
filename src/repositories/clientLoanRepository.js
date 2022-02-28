const Client = require('../models/clients');

const Loan = require('../models/loan');

const ClientLoan = require('../models/clientLoan');

const getAll = async ()  =>  await ClientLoan.find().populate('clients').populate('loan');

const getOne = async (id)  => await ClientLoan.findById(id).populate('clients').populate('loan');


const count = async ()  =>  await ClientLoan.count();

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