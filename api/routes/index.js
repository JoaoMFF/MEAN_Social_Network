// Config
const express = require("express");
const router = express.Router();
// Routes import
const auth = require("./auth.route");
const user = require("./user.route");
const post = require("./post.route");
// Routes config
router.use("/auth", auth);
router.use("/user", user);
router.use("/post", post);
module.exports = router;
