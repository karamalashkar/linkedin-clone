import SideBar from '../sidebar/SideBar';
import Applicant from '../applicant/Applicant';
import Bar from '../bar/Bar';
import './style.css';

const Company = () =>{
    return(
        <div className='company'>
            <div className='company-part side-company'>
                <SideBar></SideBar>
            </div>
            <div className='company-part body-company'>
                <Bar></Bar>
                <Applicant></Applicant>
            </div>
        </div>
    )
}

export default Company;