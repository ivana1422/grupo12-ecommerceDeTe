const {getUsers, writeUsers}= require("../data/data")

const {validationResult}=require("express-validator")

module.exports= {
    login: (req,res)=>{
        res.render("users/login",{
            titulo: "Iniciar sesion",
            session:req.session
        })
    },

    processLogin: (req,res)=>{
        let errors = validationResult(req)
    },

    register: (req,res) =>{
        res.render('users/register',{
            titulo: 'Registrarse'
        }
        )
    }
}