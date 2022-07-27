const {body}=require("express-validator");

let change2Validator = [
    body('pass').notEmpty().withMessage('Debe colocar una contraseña').isLength({min: 5,max: 12}).withMessage('La contraseña debe tener un minimo de 5 caracteres'),
    body('pass2').notEmpty().withMessage('Debe colocar de nuevo su contraseña').isLength({min: 5, max: 12}).withMessage('La contraseña debe tener un minimo de 5 caracteres').custom((value, {req}) =>{
        if(req.body.pass === req.body.pass2){
            return true
        }
        return false
    }).withMessage('Las contraseñas no coinciden'),
]

module.exports= change2Validator;