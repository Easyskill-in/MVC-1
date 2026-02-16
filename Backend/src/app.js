const express = require("express")
const app = express()
const cors = require("cors")
const { FRONTEND_ORIGIN } = require("../config/config")
const UserRoute = require("../Routes/User.routes.js")
const ProductRoute = require("../Routes/Product.routes.js")

app.use(cors({
    origin:FRONTEND_ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",UserRoute)
app.use("/product",ProductRoute)

app.get("/",(req,res)=>{
    res.send("Hello From App")
})

module.exports = {app}