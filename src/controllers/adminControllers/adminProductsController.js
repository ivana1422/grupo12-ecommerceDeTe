const { promiseImpl } = require("ejs");
const db = require("../../database/models");
const {Op} = db.Sequelize;
const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary');
const { json } = require("body-parser");


module.exports = {
    listaProductos: (req,res) =>{

        db.products.findAll({
            include: [{ association: "ingredients" },{ association: "categories" },{ association: "images" }]
        })
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
    createProduct:async (req,res)=>{

        
        
        db.products.create({
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment : req.body.coment,
            category_id: req.body.category,
            stock: req.body.stock ? req.body.stock : req.body.stock = 0,
            discount: req.body.discount ? req.body.discount : req.body.discount = null
        }, {include: [{ association: "images"}, { association: "ingredients"}]})
        .then(async (product) => {
            let defaultImage = "https://res.cloudinary.com/ecommerce-tea/image/upload/v1658196622/product_htzrzn.png"
            let urlNamesArray = []

            if(req.files.length > 0){

                let pathsArray = []
                let tempUrls = []
                let imageUrl1 = ''
                let imageUrl2 = ''
                let imageUrl3 = ''
    
                req.files.forEach(file=>{
                    pathsArray.push(file.path)
                })
    
                imageUrl1 = req.files && req.files[0] ? await cloudinary.v2.uploader.upload(req.files[0].path) : undefined
                imageUrl2 = req.files && req.files[1] ? await cloudinary.v2.uploader.upload(req.files[1].path) : undefined
                imageUrl3 = req.files && req.files[2] ? await cloudinary.v2.uploader.upload(req.files[2].path) : undefined
                tempUrls.push(imageUrl1)
                tempUrls.push(imageUrl2)
                tempUrls.push(imageUrl3)

                tempUrls.forEach(async image=>{
                    if(image !== undefined){
                        urlNamesArray.push({
                            src: image.secure_url,
                            public_id:image.public_id
                        })
                    }
                })
                /*tempUrls.forEach(image=>{
                    if(image !== undefined){
                        urlNamesArray.push(image.secure_url)
                    }
                })*/
                
                
                pathsArray.forEach(pathFile=>{
                    fs.unlinkSync(pathFile)
                })
            } else {
                urlNamesArray.push({
                    src:defaultImage,
                    public_id:''
                })
            }


            let arrayImages = urlNamesArray.map(image => {
                return {
                    ...image,
                    //src: image, 
                    product_id: product.id
                }
            })
            

            let ingredients = [req.body.ingredient1 ? req.body.ingredient1 : '',
                                req.body.ingredient2 ? req.body.ingredient1 : '',
                                 req.body.ingredient3 ? req.body.ingredient1 : '']

            let ingredientes;
            
            let arrayIngredients = ingredients.map( ingredient => {
                if(ingredient !== '')
                return {
                    name: ingredient,
                    product_id: product.id
                }
            })

            if(arrayIngredients > 0){
                
                let imagenes = db.images.bulkCreate(arrayImages);
                ingredientes = db.ingredients.bulkCreate(arrayIngredients)

                return Promise.all([imagenes, ingredientes > 0 && ingredientes])
            } else {
                let imagenes = db.images.bulkCreate(arrayImages);
                return Promise.all([imagenes])
            }


            
        })
        .then(() => {
            
            res.redirect("/admin/productos")
            
        })
        .catch((error) => {
             console.log(error)
        })
    },

    editProduct: (req,res)=>{
        let idProducto = +req.params.id;

        let product = db.products.findByPk(idProducto,{
            include: [{ association: "ingredients" },{ association: "categories" },{ association: "images" }]
        })

        let categories = db.categories.findAll()

        Promise.all([product,categories])

        .then(result=>{
            res.render('admin/products/editProducts', {
                postHeader: "Editar Producto",
                titulo: "Edición",
                product:result[0],
                category:result[1],
                /*ingredients,
                productCategory,*/
                session:req.session  
            })
        })
        .catch((error) => {
            res.send(error)
         })
        

        /*
        .then((product) => { 
            db.categories.findAll()
            .then((category) => {
                db.ingredients.findAll({
                    where:{
                        product_id: idProducto
                    }
                })
                .then((ingredients) => {

                    db.product_category.findAll({
                        where: {
                            product_id: idProducto
                        }
                    })
                    .then((productCategory) => {
                        res.render('admin/products/editProducts', {
                            postHeader: "Editar Producto",
                            titulo: "Edición",
                            product,
                            category,
                            ingredients,
                            productCategory,
                            session:req.session  
                        })
                    })
                })
                
            })
         })
        .catch((error) => {
            res.send(error)
         })*/
    },

    productoEditado: (req,res)=>{

        let idProducto = +req.params.id;

        db.products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment: req.body.coment,
            category_id:req.body.category,
            stock: req.body.stock ? req.body.stock : req.body.stock = 0,
            discount: req.body.discount ? req.body.discount : req.body.discount = null 

        },{
            where: {
                id: idProducto
            }
        })
        .then(() => {

            return db.ingredients.destroy({
                where: {
                    product_id: req.params.id
                }
            })
        })
        .then(() => {
            
            let ingredients = [req.body.ingredient1, req.body.ingredient2, req.body.ingredient3]
            let arrayIngredients = ingredients.map((e) => {
                return {
                    name: e,
                    product_id: req.params.id
                }
            })

            return db.ingredients.bulkCreate(arrayIngredients)
        })
        .then(() => {
            if(req.files !== undefined && req.files.length > 0){
                db.images.findAll({
                    where: {
                        product_id: req.params.id
                    }
                })
                .then(async (images) => {

                    await images.forEach(async image=>{
                        if(image.public_id !== '' ){
                            await cloudinary.v2.uploader.destroy(image.public_id) 
                        } 
                    })

                    return db.images.destroy({
                            where: {
                                product_id: req.params.id
                            }
                    })
                }) 
            }
        })     
            .then(async () => {
                let urlNamesArray = []
                let defaultImage = "https://res.cloudinary.com/ecommerce-tea/image/upload/v1658196622/product_htzrzn.png"

                if(req.files.length > 0){
                        let pathsArray = []
                        let tempUrls = []
                        let imageUrl1 = ''
                        let imageUrl2 = ''
                        let imageUrl3 = ''

                        req.files.forEach(file => {
                            pathsArray.push(file.path)
                        })

                        imageUrl1 = req.files && req.files[0] ? await cloudinary.v2.uploader.upload(req.files[0].path) : undefined
                        imageUrl2 = req.files && req.files[1] ? await cloudinary.v2.uploader.upload(req.files[1].path) : undefined
                        imageUrl3 = req.files && req.files[2] ? await cloudinary.v2.uploader.upload(req.files[2].path) : undefined
                        tempUrls.push(imageUrl1)
                        tempUrls.push(imageUrl2)
                        tempUrls.push(imageUrl3)

                        /*tempUrls.forEach(image => {
                            if (image !== undefined) {
                                urlNamesArray.push(image.secure_url)
                                
                            }
                        })*/
                        tempUrls.forEach(image=>{
                            if(image !== undefined){
                                urlNamesArray.push({
                                    src: image.secure_url,
                                    public_id:image.public_id
                                })
                            }
                        })

                        pathsArray.forEach(pathFile => {
                            fs.unlinkSync(pathFile)
                    })
                } else {
                    urlNamesArray.push({
                        src:defaultImage,
                        public_id:''
                    })
                }

                let arrayImages = urlNamesArray.map(image => {
                    return {
                        ...image,
                        product_id: req.params.id
                    }
                })

                return db.images.bulkCreate(arrayImages)
            })

            .then(() => {
                /*return db.product_category.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
            })
            .then(() => {*/

                /*db.categories.findAll({
                    where:{
                        name: req.body.category
                    }
                })*/
                /*.then((categ) => {
                    let idCategory = categ[0].id
                                            
                    let editCategory = {
                        product_id: req.params.id,
                        category_id: idCategory
                    }
                    db.product_category.create(editCategory)
                    .then(() => {*/
                        res.redirect("/admin/productos")
                    /*})*/
                })
                .catch((error) => { console.log(error)})
            /*})*/
            
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
                
                imageFind.forEach(async image=>{
                    if(image.public_id !== '' ){
                        await cloudinary.v2.uploader.destroy(image.public_id) 
                    } 
                })

                /*imageFind.forEach((image) => {
                    if(fs.existsSync(path.join(__dirname, `../../../public/img/products/${image.src}`))){
                        fs.unlinkSync(path.join(__dirname, `../../../public/img/products/${image.src}`))
                    }
                })*/

                db.images.destroy({
                    where: {
                        product_id: req.params.id
                    }
                })
                .then(() => {
                    /*db.product_category.destroy({
                        where:{
                            product_id: req.params.id
                        }
                    })
                    .then(() => {*/
                        return db.products.destroy({
                            where: {
                                id: req.params.id
                            }
                        })
                    })
                    .then((result) => {
                        if(result){
                            res.redirect('/admin/productos')
                        }else{
                            res.render('no se pudo eliminar el producto')
                        }
                    })
                    
                    .catch((error) => {
                        res.send(error)
                        console.log('Hubo un problema.')
                    })
                })
            })
        /*})*/
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