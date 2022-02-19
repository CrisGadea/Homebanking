const { Router } = require('express');
const { getAll, createClient } = require('../client/clientController');
const {getAccounts, createAccount} = require('../account/accountController');

const router = new Router();


router.get('/clients', getAll.getClients);
router.get('/clients/:id',getAll.getClient);
router.post('/clients',createClient.createClient);

router.get('/accounts/:id',getAccounts.getAccount);
router.get('/accounts',getAccounts.getAccounts);
router.post('/accounts',createAccount.createAccount);


module.exports = router;