require("dotenv").config()

module.exports = {
    PORT:process.env.PORT || 1000,
    FRONTEND_ORIGIN:process.env.FRONTEND_ORIGIN || "http://localhost:5173"
}