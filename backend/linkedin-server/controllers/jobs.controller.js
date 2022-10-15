const Job = require('../models/jobs.model');

//add new job
const postJob = async (req, res)=>{
    const {title, description, company_id, company_name, category} = req.body;
    try{
        const job = new Job();
        job.title = title;
        job.description = description;
        job.company_id = company_id;
        job.company_name = company_name;
        job.category = category
        await job.save();
        res.json(job)
        }catch(err){
        res.status(400).json({
        message: err.message
    })
}
}

module.exports = {
    postJob
}