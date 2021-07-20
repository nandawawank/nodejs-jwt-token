const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    token: {
        type: String,
        required: false,
        trim: true
    }
})

const user = mongo.model("users", userSchema);

module.exports = user;