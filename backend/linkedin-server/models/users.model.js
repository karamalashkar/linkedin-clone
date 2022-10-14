const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    location: {
        type: String,
        required: 'location is required'
    },
    image: {
        default: ''
    },
    bio: {
        type: String,
        default: 'No bio' 
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User;