const jwt = require("jsonwebtoken")
require("dotenv").config()

const {SECRET_KEY} = process.env;

const payload = {
    id: "63862b40e065411d20a8c64e"
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"})
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const {id} = jwt.verify(token, SECRET_KEY);
    console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODYyYjQwZTA2NTQxMWQyMGE4YzY0ZSIsImlhdCI6MTY2OTg4OTk2OCwiZXhwIjoxNjY5OTcyNzY4fQ.ztJsppgINSxnqAL22PmmqqTYP1Dn0trlc_i4QQwu0la"
    jwt.verify(invalidToken, SECRET_KEY);
}
catch(error) {
    console.log(error.message)
}