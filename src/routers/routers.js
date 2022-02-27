const { Router } = require('express');
const { getAll, createClient } = require('../client/clientController');
const {getAccounts, createAccount} = require('../account/accountController');
const {getTransactions, createTransaction} = require('../transaction/transactionController');

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


module.exports = router;