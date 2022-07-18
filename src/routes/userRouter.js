const express = require("express")
const router= express.Router();
const userController= require("../controllers/userControllers");
const fileUpload = require('../middlewares/multer');

//validations
const loginValidator = require("../validations/loginValidator");
const validateRegister = require('../validations/registerValidator');
const editUserValidator = require("../validations/admin/editUserValidator");
const editProfileValidator = require('../validations/editProfileValidator')

//middlewares
const userOnline = require("../middlewares/userOnline");
const userActive = require("../middlewares/userActive");

router.get("/login",userOnline, userController.login);
router.post("/login", loginValidator,userController.processLogin)
router.get("/register",userOnline, userController.register);
router.post('/register', fileUpload.single('avatar'), validateRegister, userController.newAcount);
router.get('/profile', userActive, userController.profile);
router.get("/profile/:id",userActive, fileUpload.single('avatar'),userController.profileUpdateForm);
router.put("/profile/:id",fileUpload.single('avatar'),editProfileValidator,userController.profileUpdate);
router.delete("/profile/delete/:id",userController.deleteCount)

router.get("/logout", userController.logout);


module.exports= router;
