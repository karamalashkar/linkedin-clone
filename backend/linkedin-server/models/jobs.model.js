const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: 'Title is required'        
    },
    description:{
        type: String,
        required: 'Description is required'
    },
    company_id: {
        type: String,
        required: 'Id is required'
    },
    company_name: {
        type: String,
        required: 'Name is required'
    },
    category: {
        type: String,
        required: "Category is required"
    }
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;