const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = require('../database/models');
const path = require('path');
const fs = require('fs');



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
                        name: user.name,
                        surname: user.lastName,
                        email: user.email,
                        pass: user.pass,
                        img: user.img,
                        rol:user.rol
                        }
                         if(req.body.remember){
                             const TIME_IN_MILISECONS=60000 * 10;
                             res.cookie('tea',req.session.user,{
                                expires: new Date (Date.now()+ TIME_IN_MILISECONS),
                                httpOnly: true,
                                secure:true,})
                         }
                        res.locals.user = req.session.user
            
                        res.redirect("/")
                
            })
            .catch((error) => { res.send(error)})

            
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
            db.users.create({
                name: req.body.name,
                surname: req.body.lastName,
                email: req.body.email,
                pass: bcrypt.hashSync(req.body.pass, 10),
                avatar: req.file ? req.file.filename : "defaultAvatar.png",
                rol: 0,
                address_id: req.body.address ? req.body.address : req.body.address = +1
            })
            .then(() => { 
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

        // req.getConnection((err, conn) => {
        //     if(err) return res.status(500).send('server error')

        //     const avatar = fs.readFileSync(path.join(__dirname, '../../public/img/' + req.file.filename))

        //     conn.query('INSERT INTO users (avatar) set ?', [{avatar}], (err, rows) => {
        //         if(err) return res.status(500).send('server error')

        //         console.log('imagen guardada en la BD con exito')
        //     })
        // })
    },

    profile:(req,res)=>{
        
        db.users.findOne({
            where:{
                id: req.session.users.id,
            },
            include: [{ association: "address" }]
        })
        .then((user) => {
            res.render("users/profile",{
                    titulo:"Mi perfil",
                    session: req.session.users.id,
                    user
                })
        })
        .catch((error) => { res.render(error)})

    },

    profileUpdate: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.users.update({
                ...req.doby
            })
            .then(() => {
                res.rendirect("users/profile")
            })
            .catch((error) => { res.render(error)})
        }else{
            db.users.findOne({
                where:{
                    id: req.session.users.id
                },
                include: [{ association: "address"}]
            })
            .then((user) => {
                res.render("users/profile",{
                    titulo:"Mi perfil",
                    session: req.session,
                    user,
                    errors: errors.mapped()
                })
            })
            .catch((error) => {
                res.send(error)
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
    }
   
}