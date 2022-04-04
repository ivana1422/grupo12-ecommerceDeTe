const {getProducts} = require('../data/data');


module.exports = {
    productDetail: (req, res) => {

        let productoId = +req.params.id;

        let productoSolicitado = getProducts.find((producto) => producto.id === productoId);



        res.render("productoDetail", {
            productoSolicitado, 
            titulo: "Tea | Detalle de Producto"
        })
    }
}