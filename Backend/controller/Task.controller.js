const {readData, DeleteTask} = require("../Database/Todo.js")

const allTask = (req,res)=>{
    return res.json({
        success:true,
        message:"",
        data:readData()
    })
}

const deleteTask = (req,res)=>{
    const {id} = req.body;
    console.log("BODY : ",req.body);
    
     DeleteTask(id)
     return res.json({
        success:true,
        message:"Task Deleted successfully...",
        data:readData()
    })
}


module.exports = {allTask,deleteTask}