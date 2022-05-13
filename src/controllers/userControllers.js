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
        let errors = validationResult(req);

        if(errors.isEmpty()){
            let user = getUsers.find(user => user.email === req.body.email)

            req.session.user = {
            name: user.nombre,
            email: user.email,
            avatar: user.avatar,
            rol:user.rol
            }

            res.locals.user = req.session.user

            res.redirect("/")
        } else {
            res.render("users/login",{
                titulo:"Iniciar Sesión",
                errors:errors.mapped(),
                old:req.body,
                session:req.session
            })
        }

        
    },

    register: (req,res) =>{
        res.render('users/register',{
            titulo: 'Registrarse',
            session:req.session
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