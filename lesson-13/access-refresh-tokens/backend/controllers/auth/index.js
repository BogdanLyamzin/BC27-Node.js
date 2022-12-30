const register = require("./register")
const verify = require("./verify")
const resendEmail = require("./resendEmail")
const login = require("./login")
const refresh = require("./refresh")
const getCurrent = require("./getCurrent")
const logout = require("./logout")
const updateAvatar = require("./updateAvatar")

module.exports = {
    register,
    verify,
    resendEmail,
    login,
    refresh,
    getCurrent,
    logout,
    updateAvatar,
}