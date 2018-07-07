const mongoose = require("mongoose");
const constants = require("./../config/constants");

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: constants.USER,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: constants.POST,
        required: true
    },
    text: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    dateCreated: { type: mongoose.Schema.Types.Date, default: Date.now }
});
const Comment = mongoose.model(constants.COMMENT, CommentSchema);

module.exports = Comment;
