const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

router.get('/:id', productsController.productDetail);
router.get('/', productsController.allProducts);

module.exports = router

