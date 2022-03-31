let express = require("express");
let app = express();

let path = require("path")

app.use(express.static(path.join(__dirname, "public")))

PORT = 3030;

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/index.html", function(req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/carrito", function(req,res){
    res.sendFile(path.join(__dirname, "/views/carrito.html"))
})
app.get("/carrito.html", function(req,res){
    res.sendFile(path.join(__dirname, "/views/carrito.html"))
})


app.listen(3030, function(){
    console.log("Puerto abierto")
})
