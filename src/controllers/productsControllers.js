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

            if(producto){
                
                
                res.render("products/productDetail", {
                titulo: "Tea | Detalle de Producto",
                producto,
                session:req.session
                })

            } else {
                
                res.redirect('/')
            }
            

        })
        .catch((error) => { res.send(error)})        
    },
    allProductsByCategory:(req,res)=>{
        let products = db.products.findAll({
            where: {
                category_id: +req.params.id
            },
            include: [{ association: "images"}, { association: "ingredients"},{association:"categories"}]
        })

        let categories = db.categories.findAll()
        
        Promise.all([products,categories])
            .then(result=>{
                
                res.render("products/allProducts",{
                    productos:result[0],
                    categories:result[1],
                    titulo: "Nuestro Productos por categoría",
                    session:req.session
                })
                
            })
        },
        allProducts:(req,res)=>{
            let products = db.products.findAll({
                include: [
                    { association: "images"}, 
                    { association: "ingredients"},
                    {association:"categories"}
                    ]
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