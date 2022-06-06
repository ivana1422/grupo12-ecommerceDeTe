const express = require("express");
const router = express.Router();


const adminController = require("../../controllers/adminControllers/adminController");
const adminProductsController = require("../../controllers/adminControllers/adminProductsController");

//Se require el modulo de multer
const uploadImgProducts = require("../../middlewares/uploadImgProducts");

//middlewares
const userActive = require("../../middlewares/userActive");
const userAdminCheck = require('../../middlewares/userAdminCheck');

//Index
router.get("/", userActive, userAdminCheck, adminController.indexAdmin);

//CRUD Products
router.get("/productos", userActive, userAdminCheck, adminProductsController.listaProductos);

router.get("/productos/agregar", userActive, userAdminCheck, adminProductsController.addProduct);

router.post("/productos", uploadImgProducts.array("image", 3) ,adminProductsController.createProduct); //Se añade el middleware con metodo single y el name del input file

router.get("/productos/editar/:id", userActive, userAdminCheck, adminProductsController.editProduct);

router.put("/productos/editar/:id", uploadImgProducts.array("image", 3), adminProductsController.productoEditado);

router.delete("/productos/eliminar/:id", adminProductsController.delete);

router.get('/productos/buscar', userActive, userAdminCheck, adminProductsController.search);

//CRUD Usuarios

//CRUD Categorias

module.exports = router