const fs = require("fs")
const path = require("path")
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = require('../database/models');
const process = require('process');
let cloudinary = require('cloudinary');

const googleVerify = require('../middlewares/google-verify')



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
            db.users.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user) => {
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        surname: user.lastName,
                        email: user.email,
                        pass: user.pass,
                        avatar: user.avatar,
                        address: user.address,
                        rol:user.rol
                        }
                         if(req.body.remember){
                             const TIME_IN_MILISECONS=60000 * 100;
                             res.cookie('tea',req.session.user,{
                                expires: new Date (Date.now()+ TIME_IN_MILISECONS),
                                httpOnly: true,
                                secure:true,})
                         }
                        res.locals.user = req.session.user
            
                        res.redirect("/")
                
            })
            .catch((error) => {console.log(error)})

            
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

    newAcount: async (req, res) => {
        let errors = validationResult(req)
        console.log(req.body.email)
        if (errors.isEmpty()) {

            let defaultAvatar = "https://res.cloudinary.com/ecommerce-tea/image/upload/v1658409640/defaultAvatar_o0pfsw.png"
            let imageUser = ''
            let imagePublicId = ''
            let tempUrl = ''

            if (req.file) {
                tempUrl = await cloudinary.v2.uploader.upload(req.file.path)
                imageUser = tempUrl.secure_url
                imagePublicId = tempUrl.public_id
                fs.unlinkSync(req.file.path)
            } else {
                imageUser = defaultAvatar
                imagePublicId = ''
            }

            db.users.create({
                name: req.body.name,
                surname: req.body.lastName,
                email: req.body.email,
                pass: bcrypt.hashSync(req.body.pass, 10),
                avatar: imageUser,/*req.file ? req.file.filename : "defaultAvatar.png",*/
                avatar_public_id: imagePublicId,
                rol: 0,
                address: req.body.location ? req.body.location : 'Sin domicilio cargado'
            })

            .then(() => {
                res.redirect('/login')
            })
            .catch((error) => { res.send(error) })

        } else {

            res.render('users/register',{
                titulo: 'Registrarse',
                errors: errors.mapped(),
                old: req.body,
                session:req.session
            })
        }

    },


    profile:(req,res)=>{

        db.users.findOne({
            where:{
                email: req.session.user.email,
            }
        })
        .then((user) => {
            res.render("users/profile",{
                    titulo:"Mi perfil",
                    session: req.session,
                    user
                })
        })
        .catch((error) => { console.log(error)})

    },

    change: (req, res) => {

        db.users.findByPk(req.params.id)

        .then((user) => {
            res.render("users/change", {
                titulo: "cambiar contraseña",
                session: req.session,
                user
            } )
        })
        .catch(error => {
            console.log(error)
        })

        
    },
    changeProcess: (req, res) => {

        let errors = validationResult(req);
        if(errors.isEmpty()){
            res.redirect('/profile/change2/:id')
        }else{
            res.render('users/change', {
                titulo: "cambiar contraseña",
                errors:errors.mapped(),
                old:req.body,
                session:req.session
            })
        }

        
    },

    change2: (req, res) => {
        db.users.findByPk(req.params.id)
        .then((user) => {
            res.render("users/change2", {
                titulo: "cambiar contraseña",
                session: req.session,
                user
            } )
        })
        .catch(error => {
            console.log(error)
        })

    },

    change2Process: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.users.update({
                pass: bcrypt.hashSync(req.body.pass2, 10)
            }, {
                where:{
                    id: req.params.id
                }
            })
            .then((user) => {
                res.redirect('/profile')
            })
            .catch( error => {
                console.log(error)
            })
        }else{
            res.render('users/change2', {
                titulo: "cambiar contraseña",
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },

    profileUpdateForm:(req,res)=>{
        db.users.findByPk(req.params.id)
            .then(user=>{
                res.render("users/editProfile",{
                    titulo:"Editar mi perfil",
                    session: req.session,
                    user
                })
            })
    },

    profileUpdate: async (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.users.findByPk(req.params.id)
                .then(async user=>{

                    let imageUser = ''
                    let imagePublicId = ''
                    let tempUrl = ''
        
                    if (req.file) {
                        if (user.avatar_public_id !== '') {
                            cloudinary.v2.uploader.destroy(user.avatar_public_id)
                        }
                        tempUrl = await cloudinary.v2.uploader.upload(req.file.path)
                        imageUser = tempUrl.secure_url
                        imagePublicId = tempUrl.public_id
                        fs.unlinkSync(req.file.path)
                    } else {
                        imageUser = user.avatar
                        imagePublicId = user.avatar_public_id ? user.avatar_public_id : ''
                    }
                    return db.users.update({
                        name: req.body.name,
                        surname: req.body.surname,
                        email: req.body.email,
                        avatar: imageUser, /*req.file ? req.file.filename : user.avatar,*/
                        avatar_public_id: imagePublicId,
                        address: req.body.location
                    }, {
                        where: {
                            id: req.params.id
                        }
                    })
                })
                .then(() => {
                    res.redirect("/profile")
                })
                .catch(err => console.log(err))

        } else {
            db.users.findByPk(req.params.id)

                .then(user => {
                    res.render("users/editProfile", {
                        titulo: "Editar mi perfil",
                        session: req.session,
                        old: req.body,
                        errors: errors.mapped(),
                        user
                    })
                })
        }
    },


    logout:(req, res)=>{
        
        req.session.destroy();

         if(req.cookies.tea){
        res.cookie('tea',"",{maxAge:-1})
        }
        res.redirect("/");
    },
    deleteCount: (req, res) => {

        db.users.findByPk(req.params.id)
        .then(async user=>{
            /*address__id = user.address_id
            if(fs.existsSync(path.join(__dirname, `../../../public/img/users/${user.avatar}`)) && user.avatar != "defaultAvatar.png"){
                fs.unlinkSync(path.join(__dirname, `../../../public/img/users/${user.avatar}`))
            }else{
                console.log("La imagen no existe!");
            }*/
            user.avatar_public_id !== '' && await cloudinary.v2.uploader.destroy(user.avatar_public_id)
            return db.users.destroy({
                where:{
                    id:req.params.id
                }
            })
        })
        .then(()=>{
            res.redirect("/")

        })
        .catch(err=>console.log(err))
        
        req.session.destroy();
        
         if(req.cookies.tea){
        res.cookie('tea',"",{maxAge:-1})
        }
    },
    googleSignIn:async (req,res)=>{
        let errors = validationResult(req)
        const {id_token} = req.body;
        
        if(errors.isEmpty()){

            

            const {name,surname, email, avatar} = await googleVerify(id_token);
            
    
            db.users.findOne({
                where:{
                     email:email
                    }
            })
            .then(async (user) => {
                if(user){
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        avatar: user.avatar,
                        rol:user.rol,
                        address:user.address
                        }
                        res.locals.user = req.session.user
    
                        res.send({redirect:'/'});
                } else {
                    let usuario = await db.users.create({
                        name,
                        surname,
                        email,
                        pass: '123456789',
                        avatar,
                        avatar_public_id:null,
                        rol: 0,
                        address:'Sin domicilio cargado'
                        
                    })

                    req.session.user = {
                        id: usuario.id,
                        name: usuario.name,
                        surname: usuario.surname,
                        email: usuario.email,
                        avatar: usuario.avatar,
                        rol:usuario.rol
                        }
                        res.locals.user = req.session.user
    
                        res.send({redirect:'/'});

                }
                })
                

            } else {
                
                res.render("users/login",{
                    titulo:"Iniciar Sesión",
                    errors:errors.mapped(),
                    old:req.body,
                    session:req.session
                })
            
        }
    }
  
}