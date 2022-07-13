module.exports = {
    index: (req, res) => {
        res.render("about", {
            titulo: "Sobre nosotros!",
            session:req.session
        })
    }
}