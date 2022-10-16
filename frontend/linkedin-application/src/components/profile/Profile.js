import React,{useState} from 'react';
import "./style.css";
import Button from "../button/Button";
import Navbar from '../navbar/Navbar';
import EditProfile from "../editprofile/EditProfile";
import AddCompany from '../addcompany/AddCompany';

const Profile = () =>{
    const [isOpen,setIsOpen]=useState(false)
    const [isOpenCompany,setOpen]=useState(false)
    
    return(
        <>
        <Navbar></Navbar>
        <EditProfile open={isOpen} onClose={()=>setIsOpen(false)}></EditProfile>
        <AddCompany open={isOpenCompany} onClose={()=>setOpen(false)}></AddCompany>
        <div className='profile-section'>
        <div className="profile">
            <div className="cover"></div>
            <img className="profile-image" src="landing.png"></img>
            <div className="buttons">
                <button className='button' onClick={()=>setIsOpen(true)}>Edit</button>
                <button className='button' onClick={()=>setOpen(true)}>Company</button>
                <button className='button'>Logout</button>
            </div>    
            
            <div className="profile-info">
                <h1></h1>
                <h3></h3>
                <h4></h4>
                <p className="bio"></p>
            </div>
        </div>
        </div>
        </>
    )    
}

export default Profile;