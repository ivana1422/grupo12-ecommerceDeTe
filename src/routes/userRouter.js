const express = require("express")
const router= express.Router();

//validations
const loginValidator = require("../validations/loginValidator")

const userController= require("../controllers/userControllers")

router.get("/login", userController.login);
router.post("login", loginValidator,userController.processLogin)
router.get("/register", userController.register);

module.exports= router;
