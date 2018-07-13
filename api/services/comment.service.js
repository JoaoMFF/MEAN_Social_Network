const LogService = require("./log.service");
const Comment = require("./../models/comment.model");

exports.readComments = async function(postId) {
    try {
        const comments = await Comment.find(
            { deleted: false, post: postId },
            "user text dateCreated"
        ).populate("user", { __v: 0, password: 0 });
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

exports.deleteComment = async function(userId, postId, commentId) {
    try {
        const comment = await Comment.findOne({
            user: userId,
            post: postId,
            _id: commentId
        });

        if (!comment) {
            throw new Error(
                "Comment not found for current user / post combination"
            );
        }
        comment.deleted = true;
        await comment.save();
        LogService.deleteComment(comment);
        return true;
    } catch (e) {
        throw e.message ? e.message : new Error("Error while deleting comment");
    }
};
