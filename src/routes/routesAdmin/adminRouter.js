const express = require("express");
const router = express.Router()

const adminController = require("../../controllers/adminControllers/adminController")
const adminProductsController = require("../../controllers/adminControllers/adminProductsController")


router.get("/", adminController.listaProductos);

router.get("/productos/agregar", adminProductsController.addProduct);

router.post("/productos", adminProductsController.createProduct);

router.get("/productos/editar/:id", adminProductsController.editProduct);

router.put("/productos/editar/:id", adminProductsController.productoEditado);

router.delete("/productos/eliminar/:id", adminProductsController.delete);

router.get('/productos/buscar', adminProductsController.search);

module.exports = router