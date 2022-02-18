const { Router } = require('express');

const router = new Router();

const { getAll } = require('../client/clientController');

router.get('/clients', getAll.getClients);

module.exports = router;