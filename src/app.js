const process = require('process');
require('dotenv').config();
const PORT = process.env.PORT || 3030;

let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let path = require("path")
const methodOverride = require('method-override');
const session = require("express-session");
const cookieParser= require('cookie-parser');
const reloginCookie = require("./middlewares/reloginCookie");
const cors = require("cors")
const cloudinary = require('cloudinary')


const userRouter= require('../src/routes/userRouter');
const indexRouter = require("../src/routes/indexRouter");
const productsRouter = require("../src/routes/productsRouter");
const adminRouter = require("../src/routes/routesAdmin/adminRouter");
const carritoRouter = require("../src/routes/carritoRouter");
const aboutUsRouter = require('../src/routes/aboutUsRouter');

// const mysql = require('mysql');
// const myconn = require('express-myconnection');
// const cors = require('cors');

//api
const productsApiRouter = require("./routes/api/productsApiRouter")
const usersApiRouter = require('./routes/api/usersApiRouter')


//Middlewares

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({
    secret: "t3A",
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(cookieParser());
app.use(reloginCookie);
app.use(cors())
cloudinary.config({ 
    cloud_name: 'ecommerce-tea', 
    api_key: '736727622364223', 
    api_secret: '4WQg3CgSBjymW8snjgZ0EJDUyR0' 
    })


app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));



app.use('/', userRouter);
app.use("/", indexRouter);
app.use("/productos", productsRouter);
app.use("/admin", adminRouter);
app.use("/carrito", carritoRouter);
app.use("/about", aboutUsRouter);

app.use("/api/productos",productsApiRouter);
app.use('/api/users', usersApiRouter)


app.listen(PORT, function(){
    console.log(`Servidor abierto en puerto ${PORT}`)
})

