let express = require("express");
let app = express();
const userRouter= require('../src/routes/userRouter');


let path = require("path")

app.use(express.static(path.join(__dirname, "../public")))

app.use('/', userRouter)

PORT = 3030;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));
 



 


app.listen(3030, function(){
    console.log("Puerto abierto")
})
