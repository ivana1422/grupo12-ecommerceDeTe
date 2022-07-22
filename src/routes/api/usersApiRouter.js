const express = require("express")
const router= express.Router();
const {login,register,profile,profileUpdate,deleteCount,logout} = require('../../controllers/api/usersApiController')
const fileUpload = require('../../middlewares/multer');

//validations
const loginValidator = require("../../validations/loginValidator");
const validateRegister = require('../../validations/registerValidator');
const editUserValidator = require("../../validations/admin/editUserValidator");
const editProfileValidator = require('../../validations/editProfileValidator');

//middlewares
const accessWithToken = require('../../middlewares/api/accessWithToken')


router.post("/login", loginValidator,login)
router.post('/register', fileUpload.single('avatar'), validateRegister, register);
//router.get('/profile', userActive, userController.profile);
router.put("/profile/:id",accessWithToken,fileUpload.single('avatar'),editProfileValidator,profileUpdate);
router.delete("/profile/delete/:id",accessWithToken,deleteCount)

router.get("/logout",logout);


module.exports= router;
