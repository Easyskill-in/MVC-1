const ProductDefault = (req,res)=>{
    res.send("Hello From Product Route")
}

const ProductUsername = (req,res)=>{
    res.send("Hello Product username Route")
}

module.exports = {
    ProductDefault,
    ProductUsername
}