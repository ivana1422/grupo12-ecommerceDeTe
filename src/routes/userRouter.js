const express = require("express")
const router= express.Router();
const userController= require("../controllers/userControllers");
const fileUpload = require('../data/multer/multer');

//validations
const loginValidator = require("../validations/loginValidator");
const validateRegister = require('../validations/registerValidator');

router.get("/login", userController.login);
router.post("login", loginValidator,userController.processLogin)
router.get("/register", userController.register);
router.post('/register', fileUpload.single('avatar'), validateRegister, userController.newAcount);

module.exports= router;
