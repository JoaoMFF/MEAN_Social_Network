const Log = require("../models/log.model");
const constants = require("./../config/constants");

exports.getLogsForUser = async function(userId) {
    try {
        const logs = await Log.find(
            { userId: userId },
            {
                _id: 0,
                userId: 0
            }
        );
        console.log(logs);
        return logs;
    } catch (error) {
        console.log(error);
        throw Error("Error retrieving logs");
    }
};

exports.accountCreate = async function(userId) {
    const newLog = new Log({
        userId: userId,
        date: Date.now(),
        entityId: userId,
        entityType: constants.ACCOUNT,
        action: constants.CREATE
    });
    try {
        await newLog.save();
    } catch (e) {
        // If logging fails we don't want to prevent the user from existing
        console.log("Error while logging: ", e);
    }
};
