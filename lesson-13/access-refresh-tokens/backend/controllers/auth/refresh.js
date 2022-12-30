const jwt = require("jsonwebtoken")

const {User} = require("../../models/user")

const {HttpError, createTokens} = require("../../helpers")

const {REFRESH_SECRET_KEY} = process.env;

const refresh = async(req, res)=> {
    const {refreshToken} = req.body;

    try {
        const {id} = jwt.verify(refreshToken, REFRESH_SECRET_KEY);
        const isExist = await User.findOne({refreshToken});
        if(!isExist) {
            throw HttpError(403, "Token invalid");
        }

        const tokens = createTokens({id});

        await User.findByIdAndUpdate(id, {...tokens});

        res.json({
            ...tokens
        })
    }
    catch(error) {
        throw HttpError(403, error.message);
    }
}

module.exports = refresh;