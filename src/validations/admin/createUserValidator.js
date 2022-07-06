const {body, check} = require('express-validator');
const db = require('../../database/models');

let createUserValidator = [
    check('name').notEmpty().withMessage('Debe colocar un nombre'),
    check('surname').notEmpty().withMessage('Debe colocar su apellido'),
    check('email').notEmpty().withMessage('Debe colocar una direccion de mail').isEmail().withMessage('Tiene que ser un mail valido'),
    body('email').custom((value,{req})=>{
        return db.users.findOne({
            where:{
                email: req.body.email
            }
        })
            .then(user=>{
                if(user){
                    return Promise.reject("El email ya se encuentra registrado")
                }
            })

    }).withMessage("Email ya registrado"),
    check('pass').notEmpty().withMessage('Debe colocar una contraseña').isLength({min: 8,max: 12}).withMessage('La contrasenia debe tener un minimo de 5 caracteres'),

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
]

module.exports = createUserValidator;