const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

router.get('/all', productsController.allProducts);
router.get('/all/:id', productsController.allProductsByCategory);
router.get('/:id', productsController.productDetail);

module.exports = router

