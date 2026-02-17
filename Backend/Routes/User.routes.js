const express = require("express")
const route = express.Router()
const {UserDefault,UserUsername} = require("../controller/User.controller.js")
const {Auth,Auth1,Auth2} = require("../Middleware/Auth.middleware.js")

route.use(Auth2)

route.get("/",Auth,UserDefault)

route.get("/username",Auth1,UserUsername)

module.exports = route