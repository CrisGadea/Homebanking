const { response } = require('express');

const accountRepository = require('../../../repositories/accountRepository');

const getAccounts = async (req, res = response )  =>  {

    try {
  
      const accounts = await accountRepository.getAll();
  
      const count = await accountRepository.count();
  
   
  
      if(!accounts){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'accounts',
  
        response: accounts,
  
        total: count
  
      })
  
    } catch (error) {
  
      res.status(500).json({
  
        message: 'Error Interno del Servidor',
  
        err: error
  
      })
  
    }
  
  }

  const getAccount = async (req, res = response) => {
    try {
      
      const account = await accountRepository.getOne(req.params.id);

      if(!account){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'account',
  
        response: account
  
      })
  
    } catch (error) {
  
      res.status(500).json({
  
        message: 'Error Interno del Servidor',
  
        err: error
  
      })
  
    }
  }

  module.exports = {

    getAccounts, getAccount
  
  }