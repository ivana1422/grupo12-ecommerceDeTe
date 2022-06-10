const db = require("../../database/models");
const {Op} = db.Sequelize;


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
        res.render("admin/products/addProducts",{
            titulo: "Nuevo producto",
            postHeader: "Ingrese los datos del nuevo producto",
            session:req.session
        })
    },
    createProduct: (req,res)=>{

        let images = []

        req.files.forEach((file)=>{
            images.push(file.filename)
        })

        db.products.create({
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment : req.body.coment,
            image: req.files ? [...images] : ["default.jpg"],
            ingredients: [req.body.ingredient1,req.body.ingredient2,req.body.ingredient3],
            stock: req.body.stock ? req.body.stock : req.body.stock = 0 
        })
        .then((result) => {
            res.redirect("/admin")
        })
        .catch((error) => {
            res.send(error)
        })
    },

    editProduct: (req,res)=>{
        let idProducto = +req.params.id;

        db.products.findByPk(idProducto)
        .then((product) => { 
            res.render('admin/products/editProducts', {
                    postHeader: "Editar Producto",
                    titulo: "Edición",
                    product,
                    session:req.session
                })
         })
        .catch((error) => {
            res.send(error)
         })
    },

    productoEditado: (req,res)=>{

        let idProducto = +req.params.id;

        let images = []

        req.files.forEach((file)=>{
            images.push(file.filename)
        })

        db.products.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment: req.body.coment,
            image: req.files ? [...images] : producto.image,
            ingredients: [req.body.ingredient1,req.body.ingredient2,req.body.ingredient3],
            tock: req.body.stock ? req.body.stock : req.body.stock = 0 

        },{
            where: {
                id: idProducto
            }
        })
        .then((result) => {
            if(result){
                res.redirect('/admin')
            }else{
                res.send("ocurrio un error")
            }
        })
        .catch((error) => { res.send(error)})
    },

    delete: (req,res)=>{

        db.products.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            if(result){
                res.redirect('/admin')
            }else{
                res.send("No se pudo eliminar")
            }
        })
        .catch( error => res.send(error))
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