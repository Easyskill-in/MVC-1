const express = require("express")
const { allTask, deleteTask } = require("../controller/Task.controller")
const route = express.Router()
 
route.get("/allTask",allTask)
route.delete("/deleteTask",deleteTask)

module.exports = route