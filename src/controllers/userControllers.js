const {getUsers, writeUsers} = require('../data/data');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');



module.exports= {
    login: (req,res)=>{
        res.render("users/login",{
            titulo: "Iniciar sesion"
        })
    },

    register: (req,res) =>{
        res.render('users/register',{
            titulo: 'Registrarse'
        }
        )
    },

    newAcount: (req, res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
                let lastId = 0;

            getUsers.forEach((e)=>{
                if(e.id > lastId){
                    lastId = e.id
                }
            })

            let newUser = {
                id: lastId + 1,
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                pass: bcrypt.hashSync(req.body.pass, 10), 
                img: req.file ? req.file.filename : "defaultAvatar.png",
                rol: "user"
            }

            getUsers.push(newUser)

            writeUsers(getUsers)

            res.redirect('/login')
        }else{
            res.render('users/register',{
                titulo: 'Registrarse',
                errors: errors.mapped(),
                old: req.body
            })
        }
    }
}