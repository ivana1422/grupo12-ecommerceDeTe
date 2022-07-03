const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = require('../../database/models');
const { reset } = require('nodemon');
const {Op} = db.Sequelize;

module.exports = {
    list: (req, res) => {
        db.categories.findAll()
        .then((categorias) => {
            res.render("admin/categories/indexCategoryAdmin", {
                postHeader: "Lista de Categorías",
                titulo: "Categorias",
                categorias
            })
        })
        .catch((error) => { res.send(error)})  
    },

    categoryAdd: (req, res) => {
        res.render("admin/categories/addCategory", {
            postHeader: "Nueva Categoría",
            titulo: "Agregar categoria"
        })
    },

    categoryCreate: (req, res) => {
        db.categories.create({
            name: req.body.name
        })
        .then((result)=>{
            res.redirect("/admin/categories")
        })
        .catch((error) => { res.send(error)})
    },

    categoryEdit: (req,res) => {
        let categoryId = +req.params.id;

        db.categories.findByPk(categoryId)
        .then((category) => {
            res.render('admin/categories/editCategory', {
                postHeader: "Editar Categoría",
                titulo: "Editar Categorias",
                category
            })
        })
        .catch((error) => { res.send(error)})
    },

    categoryUpdate: (req, res) => {
        let categoryId = +req.params.id

        db.categories.update({
            name: req.body.name
        }, {
            where: {
                id: categoryId
            }
        })
        .then((result) => {
            if(result){
                return res.redirect("/admin/categories")
            }else{
                return res.send("hubo un error y no se pudo actualizar la categoria.")
            }
        })
        .catch((error) => { res.send(error)})
    },

    categoryDelete: (req, res) => {
        let categoryId = +req.params.id

        db.categories.destroy({
            where: {
                id: categoryId
            }
        })
        .then((result) => {
            if(result){
                res.redirect("/admin/categories")
            }else{
                res.send("hubo un error al eliminar la categoria.")
            }
        })
        .catch((error) => { res.send(error)})
    },

    searchCategory: (req, res) => {
        let search = req.query.search;
        let searchCategory = search.toLowerCase()

        db.categories.findAll({
            where:{
                name:{[Op.like]:`%${searchCategory}%`}
            }
        })
        .then(categorias=>{
                res.render('admin/categories/resultCategoryAdmin',{
                    titulo: `resultados de ${searchCategory}`,
                    postHeader: `resultados de ${searchCategory}`,
                    categorias,
                    session:req.session
                })
        })
        .catch((error) => { res.send(error)})

}

};