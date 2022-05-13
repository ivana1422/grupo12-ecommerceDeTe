const express = require("express")
const router= express.Router();
const validateRegister = require('../data/validations/validations');
const userController= require("../controllers/userControllers");
const fileUpload = require('../data/multer/multer');

router.get("/login", userController.login);
router.get("/register", userController.register);

router.post('/register', fileUpload.single('avatar'), validateRegister, userController.newAcount);

module.exports= router;
