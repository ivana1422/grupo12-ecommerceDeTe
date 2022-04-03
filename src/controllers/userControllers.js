module.exports= {
    login: (req,res)=>{
        res.render("login",{
            titulo: "Iniciar sesion"
        })
    }
}