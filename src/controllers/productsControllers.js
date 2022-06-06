const {getProducts} = require('../data/data');
const db = require('../database/models')


module.exports = {
    productDetail: (req, res) => {
        db.producto.findall()

        let productoId = +req.params.id;

        let productoSolicitado = getProducts.find((producto) => producto.id === productoId);



        res.render("products/productDetail", {
            productoSolicitado,
            titulo: "Tea | Detalle de Producto",
            session:req.session
        })
    }
}