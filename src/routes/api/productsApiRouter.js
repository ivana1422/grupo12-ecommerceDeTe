const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsApiController');

router.get('/', productsController.allProductsFilter);
router.get('/:id', productsController.productDetail);

module.exports = router

