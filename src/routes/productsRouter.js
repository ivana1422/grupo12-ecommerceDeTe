const empress = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsController');

router.get('/:id', productsControllers.productDetail);

