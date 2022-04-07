const {getProducts, writeProducts} = require("../../data/data");

module.exports = {
    addProduct: (req, res)=>{
        res.render("admin/products/addProducts",{
            titulo: "Nuevo producto",
            postHeader: "Ingrese los datos del nuevo producto"
        })
    },
    createProduct: (req,res)=>{
        let lastId = 0;

        getProducts.forEach(producto => {
            if(producto.id > lastId){
                lastId = producto.id;
            }
        });

        

        let newProduct = {
            ...req.body,
            id:lastId + 1,
            image: []
        }

        getProducts.push(newProduct)

        writeProducts(getProducts)

        res.redirect("/admin")
    },

    editProduct: (req,res)=>{
        let idProducto = +req.params.id;

        let productoSolicitado = getProducts.find((product)=>{
            product.id === idProducto
        })

        res.render("admin/products/editProducts",{
            producto: productoSolicitado,

            titulo: productoSolicitado.name 
        })
    },

    productoEditado: (req,res)=>{

    }
}