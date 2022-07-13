const {body, check} = require('express-validator');
const db = require('../../database/models');

let editUserValidator = [
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
                if(user.email === req.body.email){
                    return true
                }
                if(user){
                    return Promise.reject("El email ya se encuentra registrado")
                }
            })

    }).withMessage("Email ya registrado"),

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

module.exports = editUserValidator;