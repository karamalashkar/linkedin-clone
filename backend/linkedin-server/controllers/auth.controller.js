const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email}).select("password");

    if(!user) return res.json({message: "Invalid Credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.json({message: "Invalid Credentials"});

    const token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.json(token)
}


const signup = async (req, res)=>{
    const {name, email, password,image,bio,location} = req.body;
    try{
        const user = new User();
        user.name = name;
        user.email = email;
        user.image = image;
        user.bio = bio;
        user.location = location;
        user.password = await bcrypt.hash(password, 10);

        await user.save();
        res.json(user)
    }catch(err){
        res.status(400).json({
        message: err.message
    })
    }
}

module.exports = {
    signup,
    login
}