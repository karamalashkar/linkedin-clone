const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if(!token) return res.json({message: "Unauthorized"})
    try{
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        next()

    }catch(err){
        return res.json({message: "Unauthorized"})
    }

}

module.exports = authMiddleware;
