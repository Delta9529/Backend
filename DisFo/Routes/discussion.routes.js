const express = require('express');
const router = express.Router();
const {
    postDiscussion
} = require("../Controller/discussion.Controller");

router.post("/new", postDiscussion);
//router.get("/all", );

module.exports = router;