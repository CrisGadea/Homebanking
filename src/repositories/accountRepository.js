const Account = require('../models/account');
const Client = require('../models/clients');

const getAll = async () => await Account.find(); 
const getOne = async (id) => await Account.findById(id);
const count = async () => await Account.count();

const save  = async (body)  =>  {

    const account = new Account({
      number: body.number,
      client: body.client
    })
  
    const acc = await account.save();
    console.log(acc);
    const client  = await Client.findById(acc.client);
    client.accounts.push(acc._id);
    console.log(client);
    await Client.updateOne({_id: client._id},  {accounts:  client.accounts});
  
    return  account;
  }

  module.exports = {
      save,
      getAll,
      getOne,
      count
  }