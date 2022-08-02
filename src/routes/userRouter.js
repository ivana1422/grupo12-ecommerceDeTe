const express = require("express")
const router= express.Router();
const userController= require("../controllers/userControllers");
const fileUpload = require('../middlewares/multer');

//validations
const loginValidator = require("../validations/loginValidator");
const validateRegister = require('../validations/registerValidator');
const editUserValidator = require("../validations/admin/editUserValidator");
const editProfileValidator = require('../validations/editProfileValidator');
const changeValidator = require("../validations/changeValidator");
const change2Validator = require("../validations/change2Validator");
const googleValidator = require('../validations/googleValidator')


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
router.delete("/profile/delete/:id",userController.deleteCount);
router.get('/profile/change/:id', userActive, userController.change);
router.post('/profile/change/:id', changeValidator, userController.changeProcess);
router.get('/profile/change2/:id',userActive, userController.change2);
router.put('/profile/change2/:id', change2Validator, userController.change2Process);

router.post('/google',googleValidator,userController.googleSignIn)


router.get("/logout", userController.logout);


module.exports= router;
