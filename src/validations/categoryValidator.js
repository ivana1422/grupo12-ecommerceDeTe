const {check, body}=require("express-validator");

const db = require('../database/models');

let categoryValidator = [
    check('name')
    .notEmpty().withMessage('Coloque una categoria')
    .isLength({ min: 4 })
    .isAlpha().withMessage('Categoria invalida. Use solo letras'),

]


module.exports = categoryValidator;