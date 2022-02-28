const { Router } = require('express');
const { getAll, createClient } = require('../client/clientController');
const {getAccounts, createAccount} = require('../account/accountController');
const {getTransactions, createTransaction} = require('../transaction/transactionController');
const {getClientLoans, createClientLoan} = require('../clientLoan/clientLoanController');
const {getLoans, createLoan} = require('../loan/loanController');
const {getCards, createCard} = require('../card/cardController');

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

router.get('/clientLoans/:id',getClientLoans.getClientLoans);
router.get('/clientLoans',getClientLoans.getClientLoan);
router.post('/clientLoans',createClientLoan.createClientLoan);

router.get('/loans/:id',getLoans.getLoan);
router.get('/loans',getLoans.getLoans);
router.post('/loans',createLoan.createLoan);

router.get('/cards/clients/:id',getCards.getCards);
router.get('/cards',getCards.getCard);
router.post('/cards',createCard.createCard);


module.exports = router;