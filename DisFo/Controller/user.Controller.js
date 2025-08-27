const userValidator = require("../Validators/user.validators");
const User = require('../Schema/userSchema');


const postUser = async(req,res) => {
    try {
        const { validationError }  = userValidator.validate(req.body);
        if(validationError) {
            return res.status(400).json({message: error.details[0].message})
        }

        const {fullname,username,email,password} = req.body

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(404).json({message: 'user already exists'})
        }

        const newUser = new User({fullname, username, email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    }catch(error) {
            console.error(error);
            res.status(500).json({ message: "Server error1" ,error: error.message });
    }
}

const getUsersAll = async(req,res) => {
    try {
        const userResult = await User.find();
        console.log(userResult);
        return userResult
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching user details" ,error: error.message })
    }
}

module.exports = { postUser, getUsersAll };