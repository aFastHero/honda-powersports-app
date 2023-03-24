const express = require('express');
const router = express.Router();
const currentInventoryController = require('../controllers/currentInventoryController');

router.get('/', currentInventoryController.getAll);

module.exports = router;
