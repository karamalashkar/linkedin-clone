import { useState } from "react";
import { addJob } from "../../hooks/add_job";
import "./style.css";

const AddJob = ({open,onClose}) => {

    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')

    const id=localStorage.getItem('id');
    const token=localStorage.getItem('token');
    const company_id=localStorage.getItem('id_company');
    const company_name=localStorage.getItem('name_company');
    const category=localStorage.getItem('category_company');

    const onSubmit = async (e) =>{
        e.preventDefault();

        if(!title || !description){
            return null
        }

        const post={title,description,company_id, company_name, category}
        const res= await addJob(id,token,post);

        setTitle('')
        setDescription('')
    }

    if(!open){
        return null
    }
    return(
        <form onSubmit={onSubmit}>
        <div className="job">
            <div className="edit-item">
                <button className="close" onClick={onClose}>
                    x
                </button>
                <h1>Add Job</h1>
                <input type="text" 
                className="edit-input" 
                placeholder="Tile"
                onChange={(event)=>{setTitle(event.target.value)}}
                value={title}></input>

                <textarea className="edit-input text" 
                placeholder="Description" maxLength="850"
                onChange={(event)=>{setDescription(event.target.value)}}
                value={description}></textarea>
                
                <button className="edit-button">Add</button>
            </div>
        </div>
        </form>
    )
}

export default AddJob;