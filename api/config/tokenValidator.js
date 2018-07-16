const jwt = require("jsonwebtoken");
const secret = require("./secret");
const UserService = require("./../services/user.service");

async function tokenValidator(req, res, next) {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        if (!token) {
            //401 UNAUTHORIZED
            return res.status(401).json({ message: "No token provided." });
        }
        const decodedToken = await jwt.verify(token, secret.secret);
        //Check if user exists based on token id
        await UserService.getUserById(decodedToken.id);
        req.userId = decodedToken.id;
        next();
    } catch (error) {
        console.log(error);
        if (error) {
            return res.status(401).json({
                message: "No token provided."
            });
        }
        
        return res.status(500).json({
            message: "Token validation failed."
        });
    }
}

module.exports = tokenValidator;
