const { PORT } = require("../config/config.js")
const {app} = require("./app.js")
 


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})