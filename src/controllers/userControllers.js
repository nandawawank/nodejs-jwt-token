const userModel = require('../models/userModels')

const loginUser = async (request, response) => {
    await userModel.loginUser(request)
        .then((result) => {
            return response.json(result);
        })
        .catch((err) => {
            return response.json(err);
        })
}

const logoutUser = async (request, response) => {
    await userModel.logutUser(request)
        .then((result) => {
            return response.json(result);
        })
        .catch((err) => {
            return response.json(err);
        })
}

module.exports = {
    loginUser,
    logoutUser
}