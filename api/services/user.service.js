const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const LogService = require("./log.service");

exports.getUsersByEmailAndPassword = async function(email, password) {
    try {
        const user = await User.findOne({ email: email });
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            throw Error("Passwords don't match");
        }
        return user;
    } catch (error) {
        throw error;
    }
};

exports.getUserById = async function(userId) {
    try {
        const user = await User.findById(userId);
        if (user) {
            return user;
        } else {
            throw Error("User not found");
        }
    } catch (error) {
        throw error;
    }
};

exports.createUser = async function(user) {
    const newUser = new User({
        email: user.email,
        password: user.password,
        name: user.name
    });
    try {
        const savedUser = await newUser.save();
        LogService.createUser(savedUser._id);
        return savedUser;
    } catch (e) {
        throw Error("Error while Creating User");
    }
};
