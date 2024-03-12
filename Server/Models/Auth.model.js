const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    admin: {
        type: Boolean,
        default: false
    }
}, {
    keyVersion: false
});

const AuthModel = mongoose.model("LMSusers", AuthSchema);

module.exports = { AuthModel };
