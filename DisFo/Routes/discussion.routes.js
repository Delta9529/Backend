const express = require('express');
const router = express.Router();
const {
    postDiscussion
} = require("../Controller/discussion.Controller");

const {
    fetchAuthor
} = require("../Middleware/discussion.middleware")

router.post("/new", fetchAuthor, postDiscussion);
//router.get("/all", );

module.exports = router;