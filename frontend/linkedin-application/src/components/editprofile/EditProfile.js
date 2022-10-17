import { useState } from "react";
import { editProfile } from "../../hooks/editprofile";
import "./style.css";

const EditProfile = ({open,onClose}) =>{
    const id=localStorage.getItem('id');
    const token=localStorage.getItem('token');

    const [image,setImage]=useState('')
    const [bio,setBio]=useState('')
    const [location,setLocation]=useState('')

    const onSubmit = async (e)=>{
        e.preventDefault();
        
        if(!location || !bio){
            return null
        }

        const post = {bio,location};
        const user = await editProfile(id,token,post);
        localStorage.setItem('location',location);
        localStorage.setItem('bio',bio);
    }    


    if(!open){
        return null
    }
    return(
        <form onSubmit={onSubmit}>
        <div className="edit">
            <div className="edit-item">
                <button className="close" onClick={onClose}>
                    x
                </button>
                <h1>Edit Profile</h1>
                
                <input type="file"
                onChange={(event)=>
                setImage(event.target.value)}
                value={image} 
                className="edit-input"
                ></input>
                
                <input type="text"
                onChange={(event)=>{
                setLocation(event.target.value)}} 
                value={location} 
                className="edit-input" 
                placeholder="Location"
                ></input>
                
                <textarea
                onChange={(event)=>{   
                setBio(event.target.value)}}
                value={bio} 
                className="edit-input text" 
                placeholder="Bio" 
                maxLength="850"
                ></textarea>
                
                <button className="edit-button">Edit</button>
            </div>
        </div>
        </form>
    )    
}

export default EditProfile;