const express = require("express")
const router= express.Router();

const userController= require("../controllers/userControllers")

router.get("/login", userController.login)

module.exports= router;
