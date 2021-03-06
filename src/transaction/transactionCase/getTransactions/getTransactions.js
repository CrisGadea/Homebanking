const { response } = require('express');

const transactionRepository = require('../../../repositories/transactionRepository');

const getTransactions = async (req, res = response )  =>  {

    try {
  
      const transactions = await transactionRepository.getAll();
  
      const count = await transactionRepository.count();
  
   
  
      if(!transactions){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'transactions',
  
        response: transactions,
  
        total: count
  
      })
  
    } catch (error) {
  
      res.status(500).json({
  
        message: 'Error Interno del Servidor',
  
        err: error
  
      })
  
    }
  
  }

  const getTransaction = async (req, res = response) => {
    try {
      
      const transaction = await transactionRepository.getOne(req.params.id);

      if(!transaction){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'transaction',
  
        response: transaction
  
      })
  
    } catch (error) {
  
      res.status(500).json({
  
        message: 'Error Interno del Servidor',
  
        err: error
  
      })
  
    }
  }

  module.exports = {

    getTransactions, getTransaction
  
  }