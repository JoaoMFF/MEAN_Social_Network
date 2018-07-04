const secret = require("./../config/secret");
const express = require("express");
const router = express.Router();
const UserService = require("../services/user.service");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Endpoint to register a user, it creates a new user in database and returns an authentication token
router.post("/register", async function(req, res, next) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const user = {
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name
    };

    try {
        const createdUser = await UserService.createUser(user);

        const token = jwt.sign({ id: createdUser._id }, secret.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        return res.status(201).json({
            email: createdUser.email,
            name: createdUser.name,
            token: token
        });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// Enpoint to perform a login, it returns a JWT token to be used as authorization
router.post("/", async function(req, res) {
    try {
        const user = await UserService.getUsersByEmailAndPassword(
            req.body.email,
            req.body.password
        );
        const token = jwt.sign({ id: user._id }, secret.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        return res.status(200).json({
            email: user.email,
            name: user.name,
            token: token
        });
    } catch (error) {
        return res.status(400).json({ message: "Wrong credentials" });
    }
});

module.exports = router;
