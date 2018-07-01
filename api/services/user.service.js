const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

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
    // Creating a new Mongoose Object by using the new keyword
    const newUser = new User({
        email: user.email,
        password: user.password,
        name: user.name
    });
    try {
        // Saving the Todo
        const savedUser = await newUser.save();
        return savedUser;
    } catch (e) {
        // return a Error message describing the reason
        throw Error("Error while Creating User");
    }
};
