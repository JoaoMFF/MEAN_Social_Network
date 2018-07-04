const mongoose = require("mongoose");
const constants = require("./../config/constants");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true }
});

const User = mongoose.model(constants.USER, UserSchema);

module.exports = User;
