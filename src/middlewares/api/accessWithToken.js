const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const accessWithToken = (req, res, next) => {
    const token = req.rawHeaders[1].split(' ')[1]
    console.log(token)
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, process.env.SECRET)
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = accessWithToken;