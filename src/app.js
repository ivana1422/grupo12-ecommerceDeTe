let express = require("express");
let app = express();
const userRouter= require('../src/routes/userRouter');
const indexRouter = require("../src/routes/indexRouter");
const productsRouter = require("../src/routes/productsRouter");
const adminRouter = require("../src/routes/routesAdmin/adminRouter")

let path = require("path")

app.use(express.static(path.join(__dirname, "../public")))

app.use('/', userRouter);
app.use("/", indexRouter);
app.use("/producto", productsRouter);
app.use("/admin", adminRouter);

PORT = 3030;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));
 
/*Decodificacion de datos para metodo post */
app.use(express.urlencoded({extended: false}));
app.use(express.json())


 


app.listen(3030, function(){
    console.log("Puerto abierto")
})
