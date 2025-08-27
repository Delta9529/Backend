const Joi = require('joi');

const userValidator = Joi.object({
    fullname: Joi.string().default("").max(50).required(),
    username: Joi.string().required().max(25).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required(),
})

module.exports = userValidator;
