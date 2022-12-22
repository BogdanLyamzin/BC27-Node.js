const {User} = require("../../models/user")

const {HttpError, sendEmail} = require("../../helpers")

const resendEmail = async(req, res)=> {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        throw HttpError(404)
    }
    if(user.verify) {
        throw HttpError(400, "Email already verify")
    }

    const verifyEmail = createVerifyEmail(email, user.verificationCode)

    await sendEmail(verifyEmail)

    res.json({
        message: "Verify email resend success"
    })
}

module.exports = resendEmail;