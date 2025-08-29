const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    title : { type: String, maxlength: 150, required: true },
    author: { type: String, required: true, immutable: true },
    content: { type: String, default: "" },
},
{timestamps : true}
)

const Discussion  = mongoose.model("discussion", discussionSchema);

module.exports = Discussion 