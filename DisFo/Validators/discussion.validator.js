const Joi = require('joi');

const discussionValidator = Joi.object({
    title: Joi.string().default("").max(150).required(),
    author: Joi.string().required().max(50).required(),
    content: Joi.string().default("").required(),
})

module.exports = discussionValidator;