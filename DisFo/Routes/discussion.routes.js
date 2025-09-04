const express = require('express');
const router = express.Router();
const {
    postDiscussion, getAllDiscussions
} = require("../Controller/discussion.Controller");

const {
    fetchAuthor, xApiKey
} = require("../Middleware/discussion.middleware")

router.post("/new", fetchAuthor, postDiscussion);
router.get("/all1", xApiKey, getAllDiscussions);
//router.get("/all", );

module.exports = router;