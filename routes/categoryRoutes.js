const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');
const auth = require('../middleware/authMiddleware.js');
const authorize = require('../middleware/authorize.js');

// Routes for category
router.post('/', auth, authorize(['admin']), categoryController.createCategory);
router.get('/', auth, categoryController.getCategories);
router.put(
  '/:id',
  auth,
  authorize(['admin']),
  categoryController.updateCategory
);
router.delete(
  '/:id',
  auth,
  authorize(['admin']),
  categoryController.deleteCategory
);

module.exports = router;
