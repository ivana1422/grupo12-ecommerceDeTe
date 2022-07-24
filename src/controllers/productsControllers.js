const db = require('../database/models')


module.exports = {
    productDetail: (req, res) => {

        let productoId = +req.params.id;

        db.products.findOne({
            where: {
                id: productoId
            },
            include: [{ association: "images"}, { association: "ingredients"}]
        })
        .then((producto) => {
            db.ingredients.findAll({
                where: {
                    product_id: producto.id
                }
            })
            .then((ingrediente) => {
                res.render("products/productDetail", {
                    titulo: "Tea | Detalle de Producto",
                    producto,
                    ingrediente,
                    session:req.session
                })
            })
            
        })
        .catch((error) => { res.send(error)})        
    },
    allProducts:(req,res)=>{
        let products = db.products.findAll({
            include: [{ association: "images"}, { association: "ingredients"},{association:"categories"}]
        })

        let categories = db.categories.findAll()
        
        Promise.all([products,categories])
            .then(result=>{
                
                res.render("products/allProducts",{
                    productos:result[0],
                    categories:result[1],
                    titulo: "Nuestro Productos",
                    session:req.session
                })
                
            })
        }
}