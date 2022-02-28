const Card = require('../models/card');
const Client = require('../models/clients');
const CardTypes = require('../models/cardTypes');
const ColorCardTypes = require('../models/colorCardTypes');

const getAll = async () => await Card.find(); 
const getOne = async (id) => await Card.findById(id);
const count = async () => await Card.count();

const save  = async (body)  =>  {

    const card = new Card({
      number: body.number,
      type: CardTypes.DEBIT,
      color: ColorCardTypes.SILVER,
      cvv: body.cvv,
      cardHolder: body.cardHolder,
      client: body.client
    })
  
    const card = await card.save();
    console.log(card);
    const client  = await Client.findById(card.cardHolder);
    client.cards.push(card._id);
    console.log(client);
    await Client.updateOne({_id: client._id},  {cards:  client.cards});
  
    return  card;
  }

  module.exports = {
      save,
      getAll,
      getOne,
      count
  }