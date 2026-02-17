const UserDefault = (req, res) => {
    res.send("Hello From User Route")
}

const UserUsername = (req, res) => {
    res.send("Hello From username Route")
}

module.exports = {
    UserDefault,
    UserUsername
}