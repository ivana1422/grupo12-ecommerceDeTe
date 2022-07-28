const db = require('../database/models');
const nodemailer = require("nodemailer");
const process = require('process');
require('dotenv').config();
const USER_MAIL = process.env.USER_MAIL;
const PASS_MAIL = process.env.PASS_MAIL

module.exports = {
    index: (req,res) => {
        let products = db.products.findAll({
            include: [{ association: "images"}]
        })
        let categories = db.categories.findAll()

        Promise.all([products,categories])
        .then(result=>{
            // res.send(result[0])
            res.render("index",{
                productos:result[0],
                categories:result[1],
                titulo: "Tea | Tienda de té",
                session:req.session
            })
        })
    },
    sendMail:async (req,res)=>{

        const transporter = nodemailer.createTransport({
            service:"outlook",
            auth:{
                user:`${USER_MAIL}`,
                pass:`${PASS_MAIL}`
            }
        });

        const mailOptions = {
            from:`${USER_MAIL}`,
            to:req.body.email,
            subject:"Gracias por suscribirte!",
            text:"Gracias por suscribirte, este es un email de prueba para el proyecto E-commerce de Digital House y Fundación Formar",

        };
        const result = await transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                
                console.log(error)
            } else{
                res.redirect("/")
            }
        });
        
    }
}

