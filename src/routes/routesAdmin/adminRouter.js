const express = require("express");
const router = express.Router();
const fileUpload = require('../../data/multer/multer');


const adminController = require("../../controllers/adminControllers/adminController");
const adminProductsController = require("../../controllers/adminControllers/adminProductsController");
const adminCategoriesController = require("../../controllers/adminControllers/adminCategoriesController");
const adminUsersController = require('../../controllers/adminControllers/adminUsersController')

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

router.put('/categories/editCategory/:id', adminCategoriesController.categoryUpdate );

router.delete('/categories/delete/:id', adminCategoriesController.categoryDelete);

router.get('/categories/searchCategory', adminCategoriesController.searchCategory)

//CRUD users


router.get('/users', userActive, userAdminCheck, adminUsersController.listUsers );

router.get('/users/addUser', userActive, userAdminCheck, adminUsersController.addUser );

router.post('/users',fileUpload.single('avatar'), adminUsersController.createUser );

router.get('/users/profile/:id', userActive, userAdminCheck, adminUsersController.profile );

router.put('/users/editUser/:id', fileUpload.single('avatar'), adminUsersController.editUser );

router.delete('/users/delete/:id', adminUsersController.deleteUser);

router.get('/users/search', userActive, userAdminCheck, adminUsersController.search);
 
module.exports = router