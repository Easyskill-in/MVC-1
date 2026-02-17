function User(req,res,next){
    console.log("User Middleware",req.url);
    next()
}
function User1(req,res,next){
    console.log("User1 Middleware",req.url);
    next()
}
function User2(req,res,next){
    console.log("User2 Middleware",req.url);
    next()
}

module.exports = {User,User1,User2}