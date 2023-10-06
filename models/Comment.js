const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema(
  {
    content: { type: String, require: true },
    author: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    post: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "Post",
    },
    reactions: {
      like: { type: Number, default: 0 },
      dislike: { type: Number, default: 0 },
    },
  },
  { timestamp: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
