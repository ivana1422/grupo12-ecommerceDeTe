const {check, body}=require("express-validator");
const bcrypt = require("bcryptjs");
const db = require('../database/models');



let changeValidator = [
    body('pass').notEmpty().withMessage('campo requerido'),
    body('pass').custom((value, {req}) => {
        
        return db.users.findOne({
            where:{
                id: +req.params.id
            }
        })
        .then(user=>{
            if(!bcrypt.compareSync(req.body.pass, user.pass)){
                return Promise.reject()
            }
        })
        .catch(error => {
            return Promise.reject("contraseña incorrecta")
        })
    })
]

module.exports = changeValidator;