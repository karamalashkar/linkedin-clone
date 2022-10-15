const Job = require('../models/jobs.model');
const Apply = require('../models/applied_jobs.model');

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

//get all jobs for specific company
const getJobs = async (req, res) => {
    const id = req.params.id;
    await Job.find({company_id:id}).then((job)=>res.send(job))
}

//get jobs by category
const jobByCategory = async (req, res) => {
    const category = req.params.category;
    await Job.find({category:category}).then((job)=>res.send(job))
}

//apply to job
const applyJob = async (req, res) => {
    const {name, email, location, bio, id} = req.body;
    try{
            const apply = new Apply();
            apply.name = name;
            apply.email = email;
            apply.location = location;
            apply.bio = bio;
            apply.job_id = id
            await apply.save();
            res.json(apply)
        }catch(err){
            res.status(400).json({
            message: err.message
        })
    }
}
    

module.exports = {
    postJob,
    getJobs,
    jobByCategory,
    applyJob
}
