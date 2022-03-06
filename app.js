let express = require("express");
let app = express();

let path = require("path")

app.use(express.static(path.join(__dirname, "public")))

PORT = 3030;

app.listen(3030, function(){
    console.log("Puerto abierto")
})

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/views/index.html"))
})