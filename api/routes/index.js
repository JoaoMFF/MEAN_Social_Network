// Config
const express = require("express");
const router = express.Router();
// Routes import
const auth = require("./auth.route");
const user = require("./user.route");
// Routes config
router.use("/auth", auth);
router.use("/user", user);
module.exports = router;
