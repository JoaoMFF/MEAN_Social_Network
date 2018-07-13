const express = require("express");
const router = express.Router();
const tokenValidator = require("./../config/tokenValidator");
const PostService = require("./../services/post.service");
const CommentService = require("./../services/comment.service");

// Enpoint to return the posts for an authenticated user
router.get("/", tokenValidator, async function(req, res) {
    try {
        const posts = await PostService.readPosts(
            parseInt(req.query.page),
            parseInt(req.query.limit)
        );
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(400).json({ message: "Wrong credentials" });
    }
});

// Endpoint to add a new post in name of the user
router.post("/", tokenValidator, async function(req, res, next) {
    try {
        const post = {
            title: req.body.title,
            content: req.body.content
        };
        const createdPost = await PostService.createPost(req.userId, post);
        return res.status(201).json({
            title: createdPost.title,
            content: createdPost.content,
            dateCreated: createdPost.dateCreated
        });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// Endpoint to update a post in name of the user
router.put("/:id", tokenValidator, async function(req, res, next) {
    try {
        const updatedPost = await PostService.updatePost(req.userId, {
            _id: req.params.id,
            title: req.body.title,
            content: req.body.content
        });

        return res
            .status(200)
            .json({ title: updatedPost.title, content: updatedPost.content });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// Endpoint to delete a post in name of the user
router.delete("/:id", tokenValidator, async function(req, res, next) {
    try {
        const isPostDeleted = await PostService.deletePost(
            req.userId,
            req.params.id
        );
        if (isPostDeleted) {
            return res.status(200).send();
        } else {
            throw new Error("Error while deleting post");
        }
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// Enpoint to return the comments of a post for an authenticated user
router.get("/:id/comments", tokenValidator, async function(req, res) {
    try {
        const comments = await CommentService.readComments(req.params.id);
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(400).json({ message: "Wrong credentials" });
    }
});

// Enpoint to create a new comment in a post for an authenticated user
router.post("/:id/comments", tokenValidator, async function(req, res) {
    try {
        const comment = { text: req.body.text };
        const createdComment = await CommentService.createComment(
            req.userId,
            req.params.id,
            comment
        );
        return res.status(201).json({
            text: createdComment.text,
            dateCreated: createdComment.dateCreated
        });
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// Enpoint to delete a comment in a post for an authenticated user
router.delete("/:id/comments/:commentId", tokenValidator, async function(
    req,
    res
) {
    try {
        const isCommentDeleted = await CommentService.deleteComment(
            req.userId,
            req.params.id,
            req.params.commentId
        );
        if (isCommentDeleted) {
            return res.status(200).send();
        } else {
            throw new Error("Error while deleting comment");
        }
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

module.exports = router;
