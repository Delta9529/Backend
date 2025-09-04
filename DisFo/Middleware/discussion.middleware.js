const { json } = require("express");
const discussions = require("../Schema/discussion.schema");

const fetchAuthor = async(req,res,next) => {
    try {
        const { author } = req.body;
        const findUser = await discussions.findOne({ author });
        if(findUser) {
        return res
        .status(404)
        .json({ message: "User already exixts!", username: author });
        }else{
            next();
        }  
    }catch(error) {
         res.status(500).json({ message: "Something went wrong!!" , error: error.message});
    }
}

const xApiKey = (req,res,next) => {
    try {
        const apiKey =  req.headers["x-api-key"];
            if(!apiKey) {
                return res.status(401).json({
                    message : "Error: Secret key is mandatory"
                })
            }
            if(apiKey !== process.env.API_KEY) {
                return res.status(403).json({
                    message : "Error: Secret key is invalid"
                })
            }
    next();
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!!" , error: error.message});
    }
}

module.exports = { fetchAuthor, xApiKey }