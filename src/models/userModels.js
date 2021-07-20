const userEntities = require('../entities/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let refresTokens = [];

const generateToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

const loginUser = async (request) => {
    try {
        const loginAct = await userEntities.findOne({
            "username": request.body.username,
            "password": request.body.password,
        });

        if (loginAct.length === 0) return false;

        const user = request.body.username;
        const accessToken = generateToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

        refresTokens.push(refreshToken);

        try {
            const condition = {"username": request.body.username};
            await userEntities.findOneAndUpdate(condition, {token: accessToken})
                .catch((err) => {
                    return err;
                });
        } catch (e) {
            return e;
        }
        return {accessToken: accessToken, refresToken: refreshToken};
    } catch (e) {
        console.log(e);
        return e;
    }
}

const logutUser = async (request) => {
    refresTokens = refresTokens.filter(token => token !== request.body.token);
    const condition = {"username": request.body.username, "token": request.body.token};

    await userEntities.findOneAndUpdate(condition, {token : null})
        .catch((err) => {
            return err;
        })

    return 'logout success';
}

module.exports = {
    loginUser, logutUser,
    generateToken
};