const { promiseImpl } = require("ejs");
const db = require("../../database/models");
const {Op} = db.Sequelize;
const fs = require('fs');
const path = require('path');


module.exports = {
    listaProductos: (req,res) =>{

        db.products.findAll()
        .then((product) => {
            res.render("admin/products/indexProductsAdmin",{
                titulo: "Administrador de productos",
                postHeader: "Lista de Productos",
                product,
                session:req.session
            })
        })
        .catch((error) => { res.send(error)})

    },
    addProduct: (req, res)=>{

        db.categories.findAll()
        .then((category) => {
            res.render("admin/products/addProducts",{
                titulo: "Nuevo producto",
                postHeader: "Ingrese los datos del nuevo producto",
                category,
                session:req.session
            })
        })
        .catch((error) => {
            console.log(error)
        })

        
    },
    createProduct: (req,res)=>{

        db.products.create({
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment : req.body.coment,
            category: req.body.category,
            stock: req.body.stock ? req.body.stock : req.body.stock = 0 
        }, {include: [{ association: "images"}, { association: "ingredients"}]})
        .then((product) => {
            console.log(product)
            let arrayImages = req.files.map(image => {
                return {
                    src: image.filename, 
                    product_id: product.id
                }
            })

            let ingredients = [req.body.ingredient1, req.body.ingredient2, req.body.ingredient3]
            
            let arrayIngredients = ingredients.map( ingredient => {
                return {
                    name: ingredient,
                    product_id: product.id
                }
            })

            let imagenes = db.images.bulkCreate(arrayImages)
            let ingredientes = db.ingredients.bulkCreate(arrayIngredients)

            console.log(req.body.category)//aca

            Promise.all([imagenes, ingredientes])
            .then(() => {
                db.categories.findAll({
                    where: {
                        name: req.body.category
                    }
                })
                .then((categoryResult) => { 

                    console.log(categoryResult)
                    let idCategory = categoryResult[0].id
                    console.log(idCategory)

                    let productCategories = {
                        product_id: product.id,
                        category_id: idCategory
                    }
                    db.product_category.create(productCategories)
                    .then((result) => {
                        res.redirect("/admin")
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                })
                // .then((categoryResult) => {
                //     console.log(categoryResult)
                //     let categoria = categoryResult.find((e) => {
                //         e.dataValues.name == req.body.category
                //         // if(e.name == req.body.category){
                //         //     return e.id
                //         // }else{
                //         //     console.log(e.name)//aca
                //         //     console.log('Hubo un error.')
                //         // }
                //     })

                //     console.log(categoria)
                //     let categoryT = {
                //         product_id: product.id,
                //         category_id: categoria
                //     }

                //     db.product_category.create(categoryT)
                //     .then(() => {
                //         res.redirect("/admin/products")
                //     })
                //     .catch((error) => {
                //         console.log(error)
                //     })  
                // }) 
            })
            .catch((error) => {
                 console.log(error)
            })
           
        })
        .catch((error) => {
            res.send(error)
        })
    },

    editProduct: (req,res)=>{
        let idProducto = +req.params.id;

        db.products.findByPk(idProducto)
        .then((product) => { 
            db.categories.findAll()
            .then((category) => {
                res.render('admin/products/editProducts', {
                    postHeader: "Editar Producto",
                    titulo: "Edición",
                    product,
                    category,
                    session:req.session
                })
            })
         })
        .catch((error) => {
            res.send(error)
         })
    },

    productoEditado: (req,res)=>{

        let idProducto = +req.params.id;

        db.products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment: req.body.coment,
            stock: req.body.stock ? req.body.stock : req.body.stock = 0 

        },{
            where: {
                id: idProducto
            }
        })
        .then(() => {

            db.ingredients.destroy({
                where: {
                    product_id: req.params.id
                }
            })
            .then(() => {
                let ingredients = [req.body.ingredient1, req.body.ingredient2, req.body.ingredient3]
                let arrayIngredients = ingredients.map((e) => {
                    return {
                        name: e,
                        product_id: req.params.id
                    }
                })

                db.ingredients.bulkCreate(arrayIngredients)
                .then(() => {
                    if(req.files !== undefined && req.files.length > 0){
                        db.images.findAll({
                            where: {
                                product_id: req.params.id
                            }
                        })
                        .then((images) => {
                            images.forEach( image => {
                                if(fs.existsSync(path.join(__dirname, `../../../public/img/products/${image.src}`))){
                                    fs.unlinkSync(path.join(__dirname, `../../../public/img/products/${image.src}`))
                                }else{
                                    console.log('la imagen no se encontro o no existe')
                                }
                            })

                            db.images.destroy({
                                where: {
                                    product_id: req.params.id
                                }
                            })
                            
                            .then(() => {
                                let arrayImages = req.files.map(image => {
                                    return {
                                        src: image.filename,
                                        product_id: req.params.id
                                    }
                                })

                                db.images.bulkCreate(arrayImages)
                                
                                .then(() => {
                                    db.product_category.destroy({
                                        where: {
                                            product_id: req.params.id
                                        }
                                    })
                                    .then(() => {

                                        db.categories.findAll({
                                            where:{
                                                name: req.body.category
                                            }
                                        })
                                        .then((categ) => {
                                            let idCategory = categ[0].id
                                            
                                            let editCategory = {
                                                product_id: req.params.id,
                                                category_id: idCategory
                                            }
                                            db.product_category.create(editCategory)
                                            .then(() => {
                                                res.redirect("/admin")
                                            })
                                        })

                                    })
                                    
                                })
                            })
                        })


                    }
                })
            })
        })
        .catch((error) => { res.send(error)})
    },

    delete: (req,res)=>{

        db.ingredients.destroy({
            where: {
                product_id: req.params.id
            }
        })
        .then(() => {
            
            db.images.findAll({
                where:{
                    product_id: req.params.id
                }
            })
            .then((imageFind) => {
                imageFind.forEach((image) => {
                    if(fs.existsSync(path.join(__dirname, `../../../public/img/products/${image.src}`))){
                        fs.unlinkSync(path.join(__dirname, `../../../public/img/products/${image.src}`))
                    }
                })

                db.images.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
                .then(() => {
                    db.product_category.destroy({
                        where:{
                            product_id: req.params.id
                        }
                    })
                    .then(() => {
                        db.products.destroy({
                            where: {
                                id: req.params.id
                            }
                        })
                        .then((result) => {
                            if(result){
                                res.redirect('/admin/productos')
                            }else{
                                res.render('no se pudo eliminar el producto')
                            }
                        })
                    })
                    
                })
            })
        })
        .catch((error) => {
            res.send(error)
            console.log('Hubo un problema.')
        })
    },

    
    search: (req, res) => {
            let search = req.query.search;
            let searchProduct = search.toLowerCase()
    
            db.products.findAll({
                where:{
                    name:{[Op.like]:`%${searchProduct}%`}
                }
            })
            .then(producto=>{
    
                res.render('admin/products/resultProductsAdmin',{
                   titulo: `resultados de ${searchProduct}`,
                   postHeader: `resultados de ${searchProduct}`,
                   producto,
                   session:req.session
                 })
            })
            .catch((error) => { res.send(error)})
    
        }
    
        
    
}