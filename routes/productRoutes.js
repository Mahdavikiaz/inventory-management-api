const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const auth = require('../middleware/authMiddleware.js');
const authorize = require('../middleware/authorize.js');

// Routes for product
router.post('/', auth, authorize(['admin']), productController.createProduct);
router.get('/', auth, productController.getProducts);
router.put('/:id', auth, authorize(['admin']), productController.updateProduct);
router.delete(
  '/:id',
  auth,
  authorize(['admin']),
  productController.deleteProduct
);

module.exports = router;
