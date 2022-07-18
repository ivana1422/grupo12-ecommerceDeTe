const fs = require("fs")
const path = require("path")
const {validationResult, body} = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = require('../../database/models');
const {Op} = db.Sequelize;



module.exports= {

    listUsers: (req,res) =>{

        db.users.findAll({
            include: [{ association: "address"}]
        })
        .then((users) => {
            res.render("admin/users/indexUsersAdmin",{
                titulo: "Administrador de Usuarios",
                postHeader: "Lista de Usuarios",
                users,
                session:req.session
            })
        })
        .catch((error) => { res.send(error)})
    },


    profile:(req,res)=>{
        
        db.users.findByPk(req.params.id,{
            include: [{ association: "address" }]
        })
        .then((user) => {
            res.render("admin/users/editUser",{
                    titulo:`perfil de ${user.name}`,
                    session: req.session,
                    postHeader: "editor de usuarios",
                    user
                })
        })
        .catch((error) => { res.send(error)})
    },

    editUser: (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            //Corregir()
            db.users.findByPk(req.params.id)
            .then((user) => {

                db.address.update({
                    location: req.body.location,
                }, {
                    where: {
                        id: user.address_id
                    }
                })
                .then((address) => {
                    db.users.update({
                        name: req.body.name,
                        surname: req.body.surname,
                        //email: req.body.email,
                        rol: req.body.rol,
                        avatar: req.file ? req.file.filename : user.avatar,
                        // address_id: address.id
                    },{
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() =>{
                        res.redirect('/admin/users')
                    })
                    .catch((error) => { console.log(error)})
                    
                })
                    .catch((error) => { console.log(error)})
            })
            .catch((error) => { res.send(error)}) 
        }
    },

    addUser: (req, res) => {

        res.render('admin/users/addUser', {
            titulo: "Crear usuario",
            postHeader: "Creacion de usuario",
            session: req.session
        })
    },



    createUser: (req, res) => {
         let errors = validationResult(req);
        if(errors.isEmpty()){
            db.address.create({
                location: req.body.location ? req.body.location : "Sin domicilio cargado",
         })
            .then((address) => {
                db.users.create({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    rol: req.body.rol ? req.body.rol : 0,
                    pass: req.body.pass,
                    avatar: req.file ? req.file.filename : "defaultAvatar.png",
                    address_id: address.id 
                })
                .then(() =>{
                    res.redirect('/admin/users')
                })
                .catch((error) => { console.log(error)})
            })
        } else {
            res.render('admin/users/addUser', {
                titulo: "Crear usuario",
                postHeader: "Creacion de usuario",
                session: req.session,
                old:req.body,
                errors:errors.mapped()
            })
        }
        
    },

    deleteUser: (req, res) => {
        let address__id = 0
        db.users.findByPk(req.params.id)
        .then(user=>{
            address__id = user.address_id
            if(fs.existsSync(path.join(__dirname, `../../../public/img/users/${user.avatar}`)) && user.avatar != "defaultAvatar.png"){
                fs.unlinkSync(path.join(__dirname, `../../../public/img/users/${user.avatar}`))
                     
            }else{
                console.log("La imagen no existe!");
            }

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
            res.redirect("/admin/users")
       })
       .catch(err=>console.log(err))
        /*db.users.findByPk(req.params.id)
        .then((user) => {
            let usuarioEliminado = db.users.destroy({
                where: {
                    id: user.id
                }
            })
            
            let domicilioElimado = db.address.destroy({
                where:{
                    id: user.address_id
                }
            })

            Promise.all([usuarioEliminado, domicilioElimado])
            .then(() => {
                res.redirect('/admin/users')
            })
            .catch((error) => { res.send(error)})

        })
        .catch((error) => { res.send(error)})*/
    },
   
    search: (req, res) => {
        let search = req.query.search;
        let searchUser = search.toLowerCase()

        db.users.findAll({
            where:{
                name:{[Op.like]:`%${searchUser}%`}
            }
        })
        .then(users=>{

            res.render('admin/users/resultUsersAdmin',{
               titulo: `resultados de ${searchUser}`,
               postHeader: `resultados de ${searchUser}`,
               users,
               session:req.session
             })
        })
        .catch((error) => { res.send(error)})

    }

}