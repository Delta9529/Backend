const discussionValidator = require('../Validators/discussion.validator');
const Discussion = require('../Schema/discussion.schema');

const postDiscussion = async (req, res) => {
  try {
    // Validate request body
    const { error } = discussionValidator.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { title, author, content } = req.body;

    const newDiscussion = new Discussion({ title, author, content });
    await newDiscussion.save();

    res.status(201).json({
      message: "Discussion registered successfully",
      discussion: newDiscussion
    });
  } catch (error) {
    console.error("Error in postDiscussion:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { postDiscussion };
