const {check, body}=require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../database/models');

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
            where: {
                email:req.body.email
            }
        })
        .then(user=>{
            if(!bcrypt.compareSync(req.body.pass,user.pass)){
                return Promise.reject('credenciales invalidas')
            }
            return false;
        })
        .catch(error=>{
            return Promise.reject("Email o contraseña incorrecto")
        })
    }).withMessage("Email o contraseña Incorrecta"),

    body('pass').notEmpty().withMessage('Ingrese su contraseña').bail(),
]

module.exports= loginValidator;

