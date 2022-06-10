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
            res.render("products/productDetail", {
                titulo: "Tea | Detalle de Producto",
                producto,
                session:req.session
            })
        })
        .catch((error) => { res.send(error)})        
    }
}