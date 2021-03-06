const fs = require("fs")
const path = require("path")
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = require('../database/models');
const process = require('process')
let cloudinary = require('cloudinary')



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
        console.log(req.file)
        if(errors.isEmpty()){
            db.address.create({
                location: req.body.location ? req.body.location : "Domicilio no cargado"
            })
                .then(async address=>{

                    let defaultAvatar = "https://res.cloudinary.com/ecommerce-tea/image/upload/v1658409640/defaultAvatar_o0pfsw.png"
                    let imageUser = ''
                    let imagePublicId = ''
                    let tempUrl = ''
                    
                    if(req.file){
                        tempUrl = await cloudinary.v2.uploader.upload(req.file.path)
                        imageUser = tempUrl.secure_url
                        imagePublicId = tempUrl.public_id
                        fs.unlinkSync(req.file.path)
                    } else {
                        imageUser = defaultAvatar
                        imagePublicId = ''
                    }
                    

                    return db.users.create({
                        name: req.body.name,
                        surname: req.body.lastName,
                        email: req.body.email,
                        pass: bcrypt.hashSync(req.body.pass, 10),
                        avatar: imageUser,/*req.file ? req.file.filename : "defaultAvatar.png",*/
                        avatar_public_id:imagePublicId,
                        rol: 0,
                        address_id: address.id
                    })
                })
                
                .then(()=>{
                    res.redirect('/login')
                })
                .catch((error) => { res.send(error)})

        }else{
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
            },
            include: [{ association: "address" }]
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

        db.users.findByPk(req.params.id,{
            include:[{association:"address"}]
        })
        .then((user) => {
            res.render("users/change", {
                titulo: "cambiar contrase;a",
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
        // res.send(errors)
        if(errors.isEmpty()){
            console.log('enviado')
        }else{
            res.render('users/change', {
                titulo: "cambiar contra",
                errors:errors.mapped(),
                old:req.body,
                session:req.session
            })
        }

        
    },

    profileUpdateForm:(req,res)=>{
        db.users.findByPk(req.params.id,{
            include:[{association:"address"}]
        })
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

        if(errors.isEmpty()){
                db.users.findByPk(req.params.id)
                    .then(user=>{
                        db.address.update({
                            location:req.body.location
                        },{
                            where:{
                                id:user.address_id
                            }
                        })
                        .then(async ()=>{

                            let imageUser = ''
                            let imagePublicId = ''
                            let tempUrl = ''

                            if (req.file) {
                                if(user.avatar_public_id !== ''){
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
                                avatar_public_id:imagePublicId
                            },{
                                where:{
                                    id:req.params.id
                                }
                            })
                        })
                        .then(()=>{
                            res.redirect("/profile")
                        })
                        .catch(err=>console.log(err))
                    })
                } else {
                    db.users.findByPk(req.params.id,{
                        include:[{association:"address"}]
                    })
                        .then(user=>{
                            res.render("users/editProfile",{
                                titulo:"Editar mi perfil",
                                session: req.session,
                                old:req.body,
                                errors:errors.mapped(),
                                user
                            })
                        })
                }
    },

    addressCreate: (req, res) => {
        db.address.create({
            ...req.body,
        })
        .then(() => {
            res.render('users/profile')
        })
        .catch((error) => { res.render(error)})
    },

    addressDelete: (req, res) => {
        db.address.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('users/profile')
        })
        .catch((error) => { res.render(error)})
    },

    logout:(req, res)=>{
        
        req.session.destroy();

         if(req.cookies.tea){
        res.cookie('tea',"",{maxAge:-1})
        }
        res.redirect("/");
    },
    deleteCount: (req, res) => {

        let address__id = 0
        db.users.findByPk(req.params.id)
        .then(async user=>{
            /*address__id = user.address_id
            if(fs.existsSync(path.join(__dirname, `../../../public/img/users/${user.avatar}`)) && user.avatar != "defaultAvatar.png"){
                fs.unlinkSync(path.join(__dirname, `../../../public/img/users/${user.avatar}`))
                     
            }else{
                console.log("La imagen no existe!");
            }*/
            await cloudinary.v2.uploader.destroy(user.avatar_public_id)
            
            return db.users.destroy({
                where:{
                    id:req.params.id
                }
            })
        })
        .then(()=>{
            
            return db.address.destroy({
                where:{
                    id:address__id
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

  
}