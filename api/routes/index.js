// Config
const express = require("express");
const router = express.Router();
// Routes import
const auth = require("./auth.route");
// Routes config
router.use("/auth", auth);
module.exports = router;
