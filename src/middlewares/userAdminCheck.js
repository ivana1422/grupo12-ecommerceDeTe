const userAdminCheck = (req, res, next) =>{
    if(req.session.user.rol === "admin"){
        next()
    }else{
        res.render("error")
    }
}

module.exports = userAdminCheck;