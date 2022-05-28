const reloginCookie = (req,res,next)=>{
    if(req.cookies.tea){
        req.session.user = req.cookies.tea;
        res.locals.user = req.session.user
    }

    next()
}

module.exports = reloginCookie;