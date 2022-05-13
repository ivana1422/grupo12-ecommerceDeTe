const express = require("express")
const router= express.Router();

//validations
const loginValidator = require("../validations/loginValidator")

const userController= require("../controllers/userControllers")


//middlewares
const userOnline = require("../middlewares/userOnline")

router.get("/login",userOnline, userController.login);
router.post("login", loginValidator,userController.processLogin)
router.get("/register", userOnline,userController.register);

module.exports= router;
