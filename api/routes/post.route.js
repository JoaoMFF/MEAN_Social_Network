const express = require("express");
const router = express.Router();
const tokenValidator = require("./../config/tokenValidator");
const PostService = require("./../services/post.service");

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
router.post("/add", tokenValidator, async function(req, res, next) {
    const post = {
        title: req.body.title,
        content: req.body.content
    };
    try {
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

module.exports = router;
