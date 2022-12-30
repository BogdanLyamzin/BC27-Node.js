const jwt = require("jsonwebtoken");

const {HttpError, ctrlWrapper} = require("../helpers")

const {User} = require("../models/user")

const {ACCESS_SECRET_KEY} = process.env;

const authenticate = async(req, res, next) => {
    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ");

    if(bearer !== "Bearer") {
        throw HttpError(401)
    }
    try {
        const {id} = jwt.verify(token, ACCESS_SECRET_KEY);
        const user = await User.findById(id);
        if(!user || !user.accessToken) {
            throw new Error();
        }
        req.user = user;
        next();
    }
    catch(error) {
        throw HttpError(401)
    }
}

module.exports = ctrlWrapper(authenticate);