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
            id:lastId + 1
        }

        getProducts.push(newProduct)

        writeProducts(getProducts)

        res.redirect("/admin")
    }
}