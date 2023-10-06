var express = require("express");
var router = express.Router();

// authAPI
const authAPI = require("./auth.api");
router.use("/auth", authAPI);

// userAPI
const userAPI = require("./user.api");
router.use("/users", userAPI);

// postAPI
const postAPI = require("./post.api");
router.use("/posts", postAPI);

// commentAPI
const commentAPI = require("./comment.api");
router.use("/comments", userAPI);

// reactionAPI
const reactionAPI = require("./reaction.api");
router.use("/reactions", userAPI);

// friendAPI
const friendAPI = require("./friend.api");
router.use("/friends", userAPI);

module.exports = router;
