const Client = require('../models/clients');

const getAll = async ()  =>  await Client.find();

const getOne = async ()  =>  await Client.findById(id);

const count = async ()  =>  await Client.count();

module.exports = {

  getAll,

  getOne,

  count

}