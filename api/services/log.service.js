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
        )
            .populate("entity")
            .sort({ date: "desc" });
        return logs;
    } catch (error) {
        throw Error("Error retrieving logs");
    }
};

exports.createPost = async function(post) {
    const newLog = new Log({
        userId: post.user,
        date: post.dateCreated,
        entity: post._id,
        entityType: constants.POST,
        action: constants.CREATE
    });
    try {
        await newLog.save();
    } catch (e) {
        // If logging fails we don't want to prevent the user from existing
        console.log("Error while logging: ", e);
    }
};

exports.createUser = async function(userId) {
    const newLog = new Log({
        userId: userId,
        date: Date.now(),
        entity: userId,
        entityType: constants.USER,
        action: constants.CREATE
    });
    try {
        await newLog.save();
    } catch (e) {
        // If logging fails we don't want to prevent the user from existing
        console.log("Error while logging: ", e);
    }
};

exports.createComment = async function(comment) {
    const newLog = new Log({
        userId: comment.user,
        date: comment.dateCreated,
        entity: comment._id,
        entityType: constants.COMMENT,
        action: constants.CREATE
    });
    try {
        await newLog.save();
    } catch (e) {
        // If logging fails we don't want to prevent the user from existing
        console.log("Error while logging: ", e);
    }
};
