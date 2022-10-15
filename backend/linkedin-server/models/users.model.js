const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    name:{
        type: String,
        required: 'Company name is required'        
    },
    company_category:{
        type: String,
        required: 'Category is required'
    },
    bio: {
        type: String,
        required: 'Bio is required'
    }
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    email: {
        type: String,
        required: 'Email is required',
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
    },
    company: Company
})

const User = mongoose.model('User', userSchema);

module.exports = User;