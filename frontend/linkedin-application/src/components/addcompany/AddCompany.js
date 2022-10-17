import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { add_company } from "../../hooks/addCompany"; 
import "./style.css";

const AddCompany = ({open,onClose}) =>{
    
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [company_category,setCategory]=useState('')
    const [bio,setBio]=useState('')

    const onSubmit = async (e)=>{
        e.preventDefault();
        if(!name || !company_category || !bio){
            return null;
        }

        const id=localStorage.getItem('id');
        const token=localStorage.getItem('token');
        const post={name,company_category,bio};
        const user = await add_company(id,token,post);
        localStorage.setItem('id_company',user.data.company._id);
        localStorage.setItem('name_company',name);
        localStorage.setItem('category_company',company_category);
        localStorage.setItem('bio_company',bio);
        navigate('/company')
        setName('')
        setCategory('')
        setBio('')                
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
                <h1>Add Company</h1>
                <input type="text" 
                className="edit-input" 
                placeholder="Name"
                onChange={(event)=>{setName(event.target.value)}}
                value={name}></input>
                
                <select className="edit-input"
                onChange={(event)=>{setCategory(event.target.value)}}
                value={company_category}>
                    <option value=''>Category</option>
                    <option value="business">Business</option>
                    <option value="engineering">Engineering</option>
                    <option value="art">Art</option>
                    <option value="production">Production</option>
                </select>
                
                <textarea className="edit-input text" 
                placeholder="Bio" maxLength="850"
                onChange={(event)=>{setBio(event.target.value)}}
                value={bio}></textarea>
                
                <button className="edit-button">Add</button>
            </div>
        </div>
        </form>
    )    
}

export default AddCompany;