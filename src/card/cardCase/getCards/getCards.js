const { response } = require('express');

const cardRepository = require('../../../repositories/cardRepository');

const getCards = async (req, res = response )  =>  {

    try {
  
      const cards = await cardRepository.getAll();

      console.log(cards)
  
      const count = await cardRepository.count();
  
   
  
      if(!cards){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'Cards',
  
        response: cards,
  
        total: count
  
      })
  
    } catch (error) {
  
      console.log(error)
      res.status(500).json({
  
        message: 'Error Interno del Servidor',
  
        err: error
  
      })
  
    }
  
  }

  const getCard = async (req, res = response) => {
    try {
      
      const card = await cardRepository.getOne(req.params.id);

      if(!card){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'Card',
  
        response: card
  
      })
  
    } catch (error) {
  
      res.status(500).json({
  
        message: 'Error Interno del Servidor',
  
        err: error
  
      })
  
    }
  }

  module.exports = {

    getCards, getCard
  
  }