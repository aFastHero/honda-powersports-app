const express = require('express');
const router = express.Router();
const incomingInventoryController = require('../controllers/incomingInventoryController');

router.get('/', incomingInventoryController.getAll);

module.exports = router;
