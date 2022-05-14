const express = require('express');
const router = express.Router();

const carritoController = require('../controllers/carritoController');
const userActive = require("../middlewares/userActive");


router.get("/",userActive,carritoController.carrito); 

module.exports = router;