const mongoose = require('mongoose');

const appliedJobSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'Name is required'        
    },
    email:{
        type: String,
        required: 'Email is required',
        unique: true,
    },
    location: {
        type: String,
        required: 'Location is required'
    },
    bio: {
        type: String,
        required: "Bio is required"
    },
    job_id: {
        type: String,
        required: "Job Id is required"
    }
})

const AppliedJob = mongoose.model('AppliedJob', appliedJobSchema);

module.exports = AppliedJob;