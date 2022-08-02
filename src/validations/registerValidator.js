const {body, check} = require('express-validator');
const db = require('../database/models');

let validateRegister = [
    check('name').notEmpty().withMessage('Debe colocar un nombre'),
    check('lastName').notEmpty().withMessage('Debe colocar su apellido'),
    check('email').notEmpty().withMessage('Debe colocar una direccion de mail').isEmail().withMessage('Tiene que ser un mail valido'),
    check('pass').notEmpty().withMessage('Debe colocar una contraseña').isLength({min: 8,max: 12}).withMessage('La contrasenia debe tener un minimo de 5 caracteres'),
    body('email').custom((value,{req})=>{
        return db.users.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(user=>{
            if(!user){
                return true
            }
            return Promise.reject("El email ya se encuentra registrado")
        })

    }).withMessage("Email ya registrado"),
    body('pass2').notEmpty().withMessage('Debe colocar de nuevo su contraseña').isLength({min: 5}).withMessage('La contrasenia debe tener un minimo de 5 caracteres').custom((value, {req}) =>{
        if(req.body.pass === req.body.pass2){
            return true
        }
        return false
    }).withMessage('Las contraseñas no coinciden'),

    // verificacion para multer
    body("avatar")
    .custom((value, {req})=>{
        if(!req.file){
            return true
        }else if (req.file.mimetype === "image/png" || req.file.mimetype === "image/jpeg"){
            return true
        }else{
            return false
        }
        
    }).withMessage('Debes seleccionar un archivo de imagen valido'),
    check('terms').notEmpty().withMessage('Debe aceptar los terminos y condiciones')
]

module.exports = validateRegister;