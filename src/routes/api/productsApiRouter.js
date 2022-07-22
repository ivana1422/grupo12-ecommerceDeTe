const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsApiController');
const accessWithToken = require('../../middlewares/api/accessWithToken')

router.get('/',productsController.allProductsFilter);
router.get('/:id', productsController.productDetail);

module.exports = router

