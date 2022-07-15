const {check, body}=require("express-validator");

const db = require('../database/models');

let productsValidator = [
    check('name')
    .notEmpty().withMessage('campo requerido')
    .isLength({ min: 3 })
    .isAlpha().withMessage('El nombre no puede contener numeros ni caracteres especiales'),
    check('category')
    .notEmpty().withMessage('campo requerido'),
    check('price')
    .notEmpty().withMessage('campo requerido')
    .isNumeric().withMessage('Debe colocar unicamente numeros'),
    check('stock')
    .notEmpty().withMessage('campo requerido')
    .isNumeric().withMessage('Debe colocar unicamente numeros'),
    check('description')
    .notEmpty().withMessage('campo requerido'),
    check('coment')
    .notEmpty().withMessage('campo requerido'),

]


module.exports = productsValidator;