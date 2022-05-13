const {body} = require('express-validator');

let validateRegister = [
    body('name').notEmpty().withMessage('Debe colocar un nombre'),
    body('lastName').notEmpty().withMessage('Debe colocar su apellido'),
    body('email').notEmpty().withMessage('Debe colocar una direccion de mail').isEmail().withMessage('Tiene que ser un mail valido'),
    body('pass').notEmpty().withMessage('Debe colocar una contraseña').isLength({min: 5}).withMessage('La contrasenia debe tener un minimo de 5 caracteres'),
    body('pass2').notEmpty().withMessage('Debe colocar de nuevo su contraseña').isLength({min: 5}).withMessage('La contrasenia debe tener un minimo de 5 caracteres').custom((value, {req}) =>{
        if(req.body.pass === req.body.pass2){
            return true
        }
        return false
    }).withMessage('Las contraseñas no coinciden'),

    // verificacion para multer
    body("avatar")
    .custom((value, {req})=>{
        if (req.file.mimetype === "image/png" || req.file.mimetype === "image/jpeg"){return true}
        return false
    }).withMessage('Debes seleccionar un archivo de imagen valido'),
    body('terms').notEmpty().withMessage('Debe aceptar los terminos y condiciones')
]

module.exports = validateRegister;