const express = require("express");
const router = express.Router()

const adminController = require("../../controllers/adminControllers/adminController")
const adminProductsController = require("../../controllers/adminControllers/adminProductsController")


router.get("/", adminController.listaProductos);

router.get("/productos/agregar", adminProductsController.addProduct);

router.post("/productos", adminProductsController.createProduct);

module.exports = router