import React, {useState} from "react";
import { getJob } from "../../hooks/job_by_category";
import ViewJob from "../viewjob/ViewJob";

const Home = () => {

    const[jobs,setJobs]=useState([])

    const token=localStorage.getItem('token');

    const get = async (isChanged) =>{        
        const res = await getJob(token,isChanged)
        setJobs(res.data)
    }
    
    return(
        <div className="home">
            <div>
            <div className="main-nav">
                <div className="nav-item">
                    <img src="linkedin.png"></img>
                    <select
                    onChange={(event) => {
                    get(event.target.value)}}>
                        <option value="">Search for a job</option>
                        <option value="business">Business</option>
                        <option value="eng">Engineering</option>
                        <option value="art">Art</option>
                        <option value="production">Production</option>
                    </select>
                </div>
                <div className="nav-item links">
                    <a href="/home">Home</a>
                    <a href="/profile">Profile</a>
                </div>    
            </div>
            </div>
            <div className="home-body">
                <ViewJob jobs={jobs}></ViewJob>
            </div>
        </div>
    )
}

export default Home;