const bcrypt = require("bcryptjs")

const {User} = require("../../models/user")

const {HttpError, createTokens} = require("../../helpers")

const login = async(req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user){
        throw HttpError(401, "Email or password invalid"); //  throw HttpError(401, "Email invalid");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
        throw HttpError(401, "Email or password invalid"); //  throw HttpError(401, "Password invalid");
    }

    const {accessToken, refreshToken} = createTokens({id: user._id})

    await User.findByIdAndUpdate(user._id, {accessToken, refreshToken});
    
    res.json({
        accessToken,
        refreshToken,
    })
}

module.exports = login;