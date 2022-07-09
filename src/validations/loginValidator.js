const {check, body}=require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../database/models');
// const res = require("express/lib/response");

let loginValidator = [
    check('email')
                .notEmpty()
                .isEmail().withMessage('Debe ingresar un email válido').bail(),

    body('pass').custom((value,{req})=>{
        /*return db.users.findOne({
            where: {
                email: req.body.email
            }
        })        
        .then((user) => {
            if(user){
                if(!bcrypt.compareSync(req.body.pass,user.pass)){
                    return Promise.reject("Email o contraseña Incorrecta")
                } 
                return true
            }
              
        })*/
        return db.users.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user=>{
            if(bcrypt.compareSync(req.body.pass,user.pass)){
                return true
            }
    
            return false;
        })
    }).withMessage("Email o contraseña Incorrecta"),

    body('pass').notEmpty().withMessage('Ingrese su contraseña').bail()
]

module.exports= loginValidator;