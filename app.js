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



 app.get("/register", function(req,res){
     res.sendFile(path.join(__dirname,"/views/register.html" ))
 })

 app.get("/register.html", function(req,res){
    res.sendFile(path.join(__dirname,"/views/register.html" ))
})


app.listen(3030, function(){
    console.log("Puerto abierto")
})
