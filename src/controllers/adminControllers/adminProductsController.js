const {getProducts, writeProducts} = require("../../data/data");
const fs = require("fs")
const path = require("path")

module.exports = {
    addProduct: (req, res)=>{
        res.render("admin/products/addProducts",{
            titulo: "Nuevo producto",
            postHeader: "Ingrese los datos del nuevo producto",
            session:req.session
        })
    },
    createProduct: (req,res)=>{

        let lastId = 0;


        getProducts.forEach(producto => {
            if(producto.id > lastId){
                lastId = producto.id;
            }
        });

        let images = []

        req.files.forEach((file)=>{
            images.push(file.filename)
        })

        let newProduct = {
            id:lastId + 1,
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            coment : req.body.coment,
            image: req.files ? [...images] : ["default.jpg"],
            ingredients: [req.body.ingredient1,req.body.ingredient2,req.body.ingredient3]
        }

        getProducts.push(newProduct)

        writeProducts(getProducts)

        res.redirect("/admin")
    },

    editProduct: (req,res)=>{
        let idProducto = +req.params.id;
        let producto = getProducts.find(producto => producto.id === idProducto)

        res.render('admin/products/editProducts', {
            postHeader: "Editar Producto",
            titulo: "Edición",
            producto,
            session:req.session
        })


    },

    productoEditado: (req,res)=>{

        //let idProducto = +req.params.id;

        let images = []

        req.files.forEach((file)=>{
            images.push(file.filename)
        })

        getProducts.forEach(producto => {
            if(producto.id === +req.params.id){
                producto.name = req.body.name ? req.body.name : producto.name
                producto.description = req.body.description ? req.body.description : producto.description
                producto.price = req.body.price ? req.body.price : producto.price
                producto.coment = req.body.coment ? req.body.coment : producto.coment
                producto.image = req.files ? [...images] : producto.image
                producto.ingredients = req.body.ingredient1 && req.body.ingredient2 && req.body.ingredient3 ? [req.body.ingredient1, req.body.ingredient2, req.body.ingredient3] : producto.ingredients
            }
        })

        writeProducts(getProducts);

        res.redirect('/admin');
    },

    delete: (req,res)=>{

        let idProducto = +req.params.id;


        getProducts.forEach(producto =>{
            if(producto.id === idProducto){
                let productoEliminado = getProducts.indexOf(producto);

                getProducts.splice(productoEliminado,1)
            }
        })

        writeProducts(getProducts);

        res.redirect("/admin")
    },

    search: (req, res) => {
        let search = req.query.search;

        let searchProduct = search.toLowerCase()

        result = [];

        getProducts.forEach(producto =>{

            const removeAccents = (str) => {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              }

            let temp = removeAccents(producto.name.toLowerCase())

            //let temp = removeAccents(string)

            if(temp.includes(searchProduct)){
                result.push(producto)
            }
        })

        res.render('admin/resultAdmin',{
           titulo: `resultados de ${searchProduct}`,
           postHeader: `resultados de ${searchProduct}`,
           productos: result,
           session:req.session
         })
    }
}