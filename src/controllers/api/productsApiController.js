const db = require('../../database/models')


module.exports = {
    productDetail: (req, res) => {

        let productoId = +req.params.id;

        db.products.findOne({
            where: {
                id: productoId
            },
            include: [{ association: "images"}, { association: "ingredients"},{association:"categories"}]
        })
        .then((producto) => {
            
            res.status(200).json({
                producto
            })
        })
        .catch((error) => { res.send(error)})        
    },
    allProductsFilter:(req,res)=>{
        db.categories.findAll({
            includes:[{association:"products"}]
        })
        .then((categories)=>{
            db.products.findAll({
                include: [{ association: "images"}]
            })
            .then(products=>{
                res.json({
                    products,
                    categories
                })
            })
        })
    }
}