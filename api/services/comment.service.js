const LogService = require("./log.service");
const Comment = require("./../models/comment.model");

exports.readComments = async function(postId) {
    try {
        const comments = await Comment.find(
            { deleted: false, post: postId },
            "user text dateCreated"
        ).populate("user");
        return comments;
    } catch (error) {
        throw Error("Error retrieving comments");
    }
};

exports.createComment = async function(userId, postId, commentData) {
    try {
        const newComment = new Comment({
            user: userId,
            post: postId,
            text: commentData.text
        });
        const savedComment = await newComment.save();
        LogService.createComment(savedComment);
        return savedComment;
    } catch (e) {
        throw Error("Error while Creating Comment");
    }
};
