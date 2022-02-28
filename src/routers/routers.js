const { Router } = require('express');
const { getAll, createClient } = require('../client/clientController');
const {getAccounts, createAccount} = require('../account/accountController');
const {getTransactions, createTransaction} = require('../transaction/transactionController');
const {getClientLoans, createClientLoan} = require('../clientLoan/clientLoanController');

const router = new Router();


router.get('/clients', getAll.getClients);
router.get('/clients/:id',getAll.getClient);
router.post('/clients',createClient.createClient);

router.get('/accounts/:id',getAccounts.getAccount);
router.get('/accounts',getAccounts.getAccounts);
router.post('/accounts',createAccount.createAccount);

router.get('/transactions/:id',getTransactions.getTransaction);
router.get('/transactions',getTransactions.getTransactions);
router.post('/transactions',createTransaction.createTransaction);

router.get('/clients/:id/loans/:id',getClientLoans.getClientLoans);
router.get('/transactions',getClientLoans.getClientLoan);
router.post('/transactions',createClientLoan.createClientLoan);


module.exports = router;