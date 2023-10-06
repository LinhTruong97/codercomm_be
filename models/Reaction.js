const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    targetType: { type: String, require: true, enum: ["Post", "Comment"] },
    targetId: {
      type: Schema.Types.ObjectId,
      require: true,
      refPath: "targetType",
    },
    emoji: { type: String, require: true, emum: ["like", "dislike"] },
  },
  { timestamp: true }
);

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
