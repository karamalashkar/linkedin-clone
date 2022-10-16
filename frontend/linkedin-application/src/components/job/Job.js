import './style.css';
import SideBar from '../sidebar/SideBar';
import Bar from '../bar/Bar';
import Applicant from '../applicant/Applicant';

const Job = () =>{
    return(
        <div className='job'>
            <div className='side'>
                <SideBar></SideBar>
            </div>
            <div className='body'>
                <Bar></Bar>
                <Applicant></Applicant>
            </div>
        </div>
    )
}

export default Job;

