module.exports= {
    login: (req,res)=>{
        res.render("login",{
            titulo: "Iniciar sesion"
        })
    },

   




    register: (req,res) =>{
        res.render('register',{
            titulo: 'Registrarse'
        }
        )
    }
}