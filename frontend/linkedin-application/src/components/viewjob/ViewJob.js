import React from "react";
import './style.css';
import JobCard from "../jobcard/JobCard";

const ViewJob = ({jobs}) =>{
    return(
        <div className="view-job">
             {jobs.map((job) => {
                return (
                    <JobCard
                    id={job._id}
                    title={job.title}
                    namec={job.company_name}
                    description={job.description}/>
                );
                })}
        </div>
    )
}

export default ViewJob;