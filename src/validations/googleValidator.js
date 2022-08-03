const {check,body}=require("express-validator");


let googleValidator = [
    body('id_token').custom(async value=>{
        let token = await value
        if(value){
            return true
        } else {
            return false
        }
    })
    .notEmpty()
    .withMessage('El token es necesario').bail()
]

module.exports= googleValidator;

