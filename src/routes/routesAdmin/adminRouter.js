const express = require("express");
const router = express.Router();


const adminController = require("../../controllers/adminControllers/adminController")
const adminProductsController = require("../../controllers/adminControllers/adminProductsController")

//Se require el modulo de multer
const uploadImgProducts = require("../../middlewares/uploadImgProducts")

//middlewares
const userActive = require("../../middlewares/userActive")

router.get("/", userActive,adminController.listaProductos);

router.get("/productos/agregar", userActive,adminProductsController.addProduct);

router.post("/productos", uploadImgProducts.array("image", 3) ,adminProductsController.createProduct); //Se añade el middleware con metodo single y el name del input file

router.get("/productos/editar/:id", userActive,adminProductsController.editProduct);

router.put("/productos/editar/:id", uploadImgProducts.array("image", 3), adminProductsController.productoEditado);

router.delete("/productos/eliminar/:id", adminProductsController.delete);

router.get('/productos/buscar', userActive,adminProductsController.search);

module.exports = router