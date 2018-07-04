const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const constants = require("./../config/constants");

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: constants.USER,
        required: true
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    dateCreated: { type: mongoose.Schema.Types.Date, default: Date.now() }
});
PostSchema.plugin(mongoosePaginate);
const Post = mongoose.model(constants.POST, PostSchema);

module.exports = Post;
