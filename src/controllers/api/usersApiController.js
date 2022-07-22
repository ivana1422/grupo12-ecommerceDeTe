const fs = require("fs")
const path = require("path")
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = require('../../database/models');
const process = require('process');
const cloudinary = require('cloudinary');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    register: async (req, res) => {
        let errors = validationResult(req)
        console.log(req.file)
        if (errors.isEmpty()) {
            db.address.create({
                location: req.body.location ? req.body.location : "Domicilio no cargado"
            })
                .then(async address => {

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


                    return db.users.create({
                        name: req.body.name,
                        surname: req.body.lastName,
                        email: req.body.email,
                        pass: bcrypt.hashSync(req.body.pass, 10),
                        avatar: imageUser,
                        avatar_public_id: imagePublicId,
                        rol: 0,
                        address_id: address.id
                    })
                })

                .then((user) => {
                    if (user) {
                        res.status(201).json({
                            status: 201,
                            message: "Usuario creado.",
                            data: user,
                        })
                    } else {
                        res.status(400).json({
                            status: 400,
                            errors: errors.mapped(),
                            message: "Error con datos enviados!"
                        })
                    }
                })
                .catch((error) => { res.json(error) })

        } else {
            res.status(400).json({
                status: 400,
                errors: errors.mapped()
            })
        }

    },

    login: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.users.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then((user) => {
                    const token = jwt.sign({
                        name: user.name,
                        id: user.id
                    }, process.env.SECRET)

                    res.header("auth-token", token).status(200).json({
                        user: {
                            name: user.name,
                            id: user.id,
                            rol: user.rol,
                            avatar: user.avatar,
                            emai: user.email,
                            address: user.address,
                            username: user.surname
                        },

                        data: { token }
                    })
                })
                .catch((error) => { console.log(error) })

        } else {
            res.status(400).json({
                status: 400,
                errors: errors.mapped()
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
            res.status(200).json({
                data: {
                    name: user.name,
                    id: user.id,
                    rol: user.rol,
                    avatar: user.avatar,
                    emai: user.email,
                    address: user.address,
                    username: user.surname
                }
              });
        })
        .catch((error) => { console.log(error)})

    },

    profileUpdate: async (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.users.findByPk(req.params.id)
                .then(user => {
                    return db.address.update({
                        location: req.body.location
                    }, {
                        where: {
                            id: user.address_id
                        }
                    })
                })
                .then(async () => {

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
                        avatar: imageUser,
                        avatar_public_id: imagePublicId
                    }, {
                        where: {
                            id: req.params.id
                        }
                    })
                })
                .then((user) => {
                    if (user) {
                        res.status(201).json({
                            status: 201,
                            message: "Usuario actualizado",
                            data: user,
                        })
                    } else {
                        res.status(400).json({
                            status: 400,
                            errors: errors.mapped(),
                            message: "Error con datos enviados!"
                        })
                    }
                })
                .catch(err => console.log(err))
        } else {
            res.status(400).json({
                status: 400,
                errors: errors.mapped()
            })
        }

    },

    logout: (req, res) => {

        localStorage.removeItem("token")
    },
    deleteCount: (req, res) => {
        let address = 0
        db.users.findByPk(req.params.id)
            .then(async user => {
                address = user.address_id
                await cloudinary.v2.uploader.destroy(user.avatar_public_id)

                return db.users.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(() => {

                return db.address.destroy({
                    where: {
                        id: address
                    }
                })
            })
            .then(() => {

                res.status(200).json({
                    status: 200,
                    message: "Usuario eliminado",
                })

            })
            .catch(err => console.log(err))
    }
}