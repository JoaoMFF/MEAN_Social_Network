const LogService = require("./log.service");
const Post = require("./../models/post.model");

exports.readPosts = async function(page = 1, limit = 15) {
    try {
        const options = {
            select: "title content user dateCreated",
            populate: { path: "user", select: { _id: 0, password: 0, __v: 0 } },
            page: page,
            limit: limit
        };
        const posts = await Post.paginate({}, options);
        return posts;
    } catch (error) {
        console.log(error);
        throw Error("Error retrieving posts");
    }
};

exports.createPost = async function(userId, postData) {
    const newPost = new Post({
        user: userId,
        title: postData.title,
        content: postData.content
    });
    try {
        const savedPost = await newPost.save();
        LogService.createPost(savedPost);
        return savedPost;
    } catch (e) {
        throw Error("Error while Creating Post");
    }
};
