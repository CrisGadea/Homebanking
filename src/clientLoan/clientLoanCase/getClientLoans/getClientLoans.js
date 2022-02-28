const { response } = require('express');

const clientLoanRepository = require('../../../repositories/clientLoanRepository');

const getClientLoans = async (req, res = response )  =>  {

    try {
  
      const clientLoan = await clientLoanRepository.getAll();

      console.log(clientLoan)
  
      const count = await clientLoanRepository.count();
  
   
  
      if(!clientLoan){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'Client Loan',
  
        response: clientLoan,
  
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

  const getClientLoan = async (req, res = response) => {
    try {
      
      const clientLoan = await clientLoanRepository.getOne(req.params.id);

      if(!clientLoan){
  
        return res.status(401).json({
  
          message:  'Not found',
  
        })
  
      }
  
        res.status(200).json({
  
        message: 'Client Loan',
  
        response: clientLoan
  
      })
  
    } catch (error) {
  
      res.status(500).json({
  
        message: 'Error Interno del Servidor',
  
        err: error
  
      })
  
    }
  }

  module.exports = {

    getClientLoans, getClientLoan
  
  }