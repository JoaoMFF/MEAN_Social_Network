const express = require("express");
const router = express.Router();
const tokenValidator = require("./../config/tokenValidator");
const LogService = require("./../services/log.service");

// Enpoint to return the logs of the authenticated user
router.get("/logs", tokenValidator, async function(req, res) {
    try {
        const logs = await LogService.getLogsForUser(req.userId);
        return res.status(200).json({
            logs: logs
        });
    } catch (error) {
        return res.status(400).json({ message: "Wrong credentials" });
    }
});

module.exports = router;
