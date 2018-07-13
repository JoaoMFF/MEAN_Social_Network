const LogService = require("./log.service");
const Post = require("./../models/post.model");

exports.readPosts = async function(page = 1, limit = 15) {
    try {
        const options = {
            select: "title content user dateCreated",
            sort: { dateCreated: "desc" },
            populate: { path: "user", select: { _id: 0, password: 0, __v: 0 } },
            page: page,
            limit: limit
        };
        const posts = await Post.paginate({ deleted: false }, options);
        return posts;
    } catch (error) {
        throw Error("Error retrieving posts");
    }
};

exports.readPost = async function(postId, userId) {
    try {
        const post = await Post.findOne({
            _id: postId,
            deleted: false
        }).populate({ path: "user", select: { _id: 0, password: 0, __v: 0 } });
        if (!post) {
            throw new Error("Post not found");
        }
        LogService.readPost(post, userId);
        return post;
    } catch (e) {
        throw e.message ? e.message : new Error("Error while updating post");
    }
};

exports.createPost = async function(userId, postData) {
    try {
        const newPost = new Post({
            user: userId,
            title: postData.title,
            content: postData.content
        });
        const savedPost = await newPost.save();
        LogService.createPost(savedPost);
        return savedPost;
    } catch (e) {
        throw Error("Error while Creating Post");
    }
};

exports.updatePost = async function(userId, postData) {
    try {
        const post = await Post.findOne({
            _id: postData._id,
            user: userId,
            deleted: false
        });
        if (!post) {
            throw new Error("Post not found for current user");
        }
        post.title = postData.title;
        post.content = postData.content;
        await post.save();
        LogService.updatePost(post);
        return post;
    } catch (e) {
        throw e.message ? e.message : new Error("Error while updating post");
    }
};

exports.deletePost = async function(userId, postId) {
    try {
        const post = await Post.findOne({
            _id: postId,
            user: userId,
            deleted: false
        });
        if (!post) {
            throw new Error("Post not found for current user");
        }
        post.deleted = true;
        await post.save();
        LogService.deletePost(post);
        return true;
    } catch (e) {
        throw e.message ? e.message : new Error("Error while deleting post");
    }
};
