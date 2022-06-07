const express = require("express")
const router= express.Router();
const userController= require("../controllers/userControllers");
const fileUpload = require('../data/multer/multer');

//validations
const loginValidator = require("../validations/loginValidator");
const validateRegister = require('../validations/registerValidator');


//middlewares
const userOnline = require("../middlewares/userOnline");
const userActive = require("../middlewares/userActive")

router.get("/login",userOnline, userController.login);
router.post("/login", loginValidator,userController.processLogin)
router.get("/register",userOnline, userController.register);
router.post('/register', fileUpload.single('avatar'), validateRegister, userController.newAcount);
router.get('/profile', userActive,userController.profile)
router.get("/logout", userController.logout)

module.exports= router;
