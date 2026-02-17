function Auth(req,res,next){
    console.log("Auth Middleware",req.url);
    next()
}
function Auth1(req,res,next){
    console.log("Auth1 Middleware",req.url);
    next()
}
function Auth2(req,res,next){
    console.log("Auth2 Middleware",req.url);
    next()
}

module.exports = {Auth,Auth1,Auth2}