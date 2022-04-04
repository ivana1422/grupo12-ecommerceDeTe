const { json } = require("express/lib/response");
const fs = require("fs");
const path = require("path");

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname,"/productos.json"),"utf-8")),

    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname,"/users.json"),"utf-8")),

    writeUsers: (data)=> fs.writeFileSync(path.join(__dirname, "/users.json"),JSON.stringify(data))
}

