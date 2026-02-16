const express = require("express")
const route = express.Router()
const {UserDefault,UserUsername} = require("../controller/User.controller.js")
 
route.get("/",UserDefault)

route.get("/username",UserUsername)

module.exports = route