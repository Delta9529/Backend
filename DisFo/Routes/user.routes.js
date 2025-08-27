const express = require('express');
const router = express.Router();
const {
    postUser, getUsersAll
} = require("../Controller/user.Controller");
const xHeaderMiddleware = require('../Middleware/user.middleware')

router.post("/register", postUser);
router.get("/all", xHeaderMiddleware, getUsersAll);

module.exports = router;