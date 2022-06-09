const userAdminCheck = (req, res, next) =>{
    if(req.session.user.rol == 1){
        next()
    }else{
        res.render("error")
    }
}

module.exports = userAdminCheck;