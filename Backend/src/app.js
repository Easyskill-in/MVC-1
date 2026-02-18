const express = require("express")
const app = express()
const cors = require("cors")
const { FRONTEND_ORIGIN } = require("../config/config")
const UserRoute = require("../Routes/User.routes.js")
const ProductRoute = require("../Routes/Product.routes.js")
const TaskRoute = require("../Routes/Task.routes.js")
const {User,User1,User2} = require("../Middleware/User.middleware.js")
const Error = require("../Middleware/Error.middleware.js")

app.use(cors({
    origin:FRONTEND_ORIGIN,
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",UserRoute)
app.use("/product",ProductRoute)
app.use("/task",TaskRoute)

// app.use("/xyz",User2)
// app.use(User2)

// function fn(req,res,next){
//     console.log(req.body)
//     console.log("Hello From Fn Middleware")
// }

// app.use(fn)

// app.use((req,res,next)=>{
//         console.log("Hello From Fn Middleware1")
//         next()
// })
// app.use((req,res,next)=>{
//         console.log("Hello From Fn Middleware2")
//         next()
// })

// app.use(User)


// app.get("/",User,(req,res)=>{
//     res.send("Hello From App")
// })

// app.get("/x",User1,User,(req,res)=>{

//     res.send("Hello From XApp")
// })

// app.get("/error",(req,res,next)=>{
//     try {
//         throw new Error("My Next Error")
//         res.send("Error Page")
//     } catch (error) {
//         error.status =201;
//         next(error)
//     }
// })



app.use(Error)

module.exports = {app}