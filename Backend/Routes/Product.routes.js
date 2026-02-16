const express = require("express")
const route = express.Router()
const {ProductDefault,ProductUsername} = require("../controller/Product.controller.js")

route.get("/",ProductDefault)
route.get("/username",ProductUsername)

module.exports = route