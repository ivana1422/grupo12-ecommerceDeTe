const express = require("express");
const router = express.Router();


const indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.post("/sendMail", indexController.sendMail)

module.exports = router;