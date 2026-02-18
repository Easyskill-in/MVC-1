const Error = (err,req,res,next)=>{
    console.log("Error :",err);
    
    return res.status(err.status || 500).json({
        success:false,
        message:err.message || "Internal Server Error",
    })
}

module.exports = Error