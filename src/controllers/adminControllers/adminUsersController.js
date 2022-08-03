const fs = require("fs")
const path = require("path")
const {validationResult, body} = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = require('../../database/models');
const {Op} = db.Sequelize;
const cloudinary = require('cloudinary')



module.exports= {

    listUsers: (req,res) =>{

        db.users.findAll()
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
        
        db.users.findByPk(req.params.id)
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
                .then(async (user) => {


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
                        //email: req.body.email,
                        rol: req.body.rol,
                        avatar: imageUser,//req.file ? req.file.filename : user.avatar,
                        avatar_public_id: imagePublicId,
                        address: req.body.location
                    }, {
                        where: {
                            id: req.params.id
                        }
                    })
                    
                    
                })
                .then(() => {
                    res.redirect('/admin/users')
                })
                .catch((error) => { console.log(error) })
        }
    },

    addUser: (req, res) => {

        res.render('admin/users/addUser', {
            titulo: "Crear usuario",
            postHeader: "Creacion de usuario",
            session: req.session
        })
    },



    createUser: async (req, res) => {
         let errors = validationResult(req);
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
                surname: req.body.surname,
                email: req.body.email,
                rol: req.body.rol ? req.body.rol : 0,
                pass: req.body.pass,
                avatar: imageUser,//req.file ? req.file.filename : "defaultAvatar.png",
                avatar_public_id: imagePublicId,
                address: req.body.location
            })
                .then(() => {
                    res.redirect('/admin/users')
                })
                .catch((error) => { console.log(error) })

        } else {
            res.render('admin/users/addUser', {
                titulo: "Crear usuario",
                postHeader: "Creacion de usuario",
                session: req.session,
                old: req.body,
                errors: errors.mapped()
            })
        }
        
    },

    deleteUser: (req, res) => {
        
        db.users.findByPk(req.params.id)
        .then(async user=>{
            
            /*if(fs.existsSync(path.join(__dirname, `../../../public/img/users/${user.avatar}`)) && user.avatar != "defaultAvatar.png"){
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