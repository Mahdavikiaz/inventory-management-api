const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController.js');
const auth = require('../middleware/authMiddleware.js');
const authorize = require('../middleware/authorize.js');

// Routes for stock
router.post('/', auth, authorize(['admin']), stockController.createStock);
router.get('/', auth, stockController.getStocks);
router.put('/:id', auth, authorize(['admin']), stockController.updateStock);
router.delete('/:id', auth, authorize(['admin']), stockController.deleteStock);

module.exports = router;
