const customHeaderCheck = async (req,res,next) => {
    const headers = req.headers;
    //console.log((Object.keys(headers)).find((key) => key.startsWith('x-')));
    if(Object.keys(headers).find((key) =>key.startsWith('x-'))) {
        console.log(`Custom header found`);
    }else {
        return res.status(400).json({ message: "Missing required custom header (X-*)" });
    };

    next();
} 

module.exports = customHeaderCheck