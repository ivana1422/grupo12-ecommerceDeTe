let {getProducts, writeProducts} = require("../../data/data");

module.exports = {
    indexAdmin: (req,res) =>{
        res.render("admin/indexAdmin",{
            titulo: "Administrador de página",
            postHeader: "Bienvenido al administrador de página ",
            session:req.session
        })
    }
}