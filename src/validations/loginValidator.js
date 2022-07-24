const {check, body}=require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../database/models');

let loginValidator = [
    check('email')
                .notEmpty()
                .isEmail().withMessage('Debe ingresar un email válido').bail(),
    body('pass').custom((value,{req})=>{
        return db.users.findOne({
            where: {
                email:req.body.email
            }
        })
        .then((user) => {
            if(user !== null){
                if(!bcrypt.compareSync(req.body.pass, user.pass)){
                    return Promise.reject('credenciales invalidas')
                }else{
                    return true
                }
            }else{
                return Promise.reject('credenciales invalidas')
            }

        })
        .catch(error => {
            return Promise.reject("email o contrase;a incorrecto")
        })
    }).withMessage("Email o contrase;a incorrecto"),
    body('pass').notEmpty().withMessage('Ingrese su contraseña').bail(),
]

module.exports= loginValidator;

