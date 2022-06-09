const express = require("express");
const router = express.Router();


const adminController = require("../../controllers/adminControllers/adminController");
const adminProductsController = require("../../controllers/adminControllers/adminProductsController");
const adminCategoriesController = require("../../controllers/adminControllers/adminCategoriesController")

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



//CRUD Categorias

router.get('/categories', userActive, userAdminCheck, adminCategoriesController.list );

router.get('/categories/addCategory', userActive, userAdminCheck, adminCategoriesController.categoryAdd );

router.post('/categories', adminCategoriesController.categoryCreate );

router.get('/categories/editCategory/:id', userActive, userAdminCheck, adminCategoriesController.categoryEdit );

router.put('/categories/:id', adminCategoriesController.categoryUpdate );

router.delete('/categories/delete/:id', adminCategoriesController.categoryDelete);


 
module.exports = router