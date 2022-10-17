import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { addUser } from "../../hooks/addUser";

const SignUp = () => {
    const navigate=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [location,setLocation]=useState('')

    const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email || !password || !location){
            return null;
        }

       if(isEmail(email)){
            const bio='';
            const image='';
            const post={name,email,password,location,bio,image};
            const user = await addUser(post);
            navigate("/login")
        }

        setName('');
        setEmail('');
        setPassword('');
        setLocation('');
    }
    return (
        <form onSubmit={onSubmit}>
        <div className="form">
            <input type="text" 
            placeholder="Name" 
            className="input-landing"
            onChange={(event)=>{
            setName(event.target.value)}}
            value={name}></input>
            
            <input type="email" 
            placeholder="Email" 
            className="input-landing"
            onChange={(event)=>{setEmail(event.target.value)}}
            value={email}></input>

            <input type="password" 
            placeholder="Password" 
            className="input-landing"
            onChange={(event)=>{setPassword(event.target.value)}}
            value={password}></input>

            <input type="text" 
            placeholder="Location" 
            className="input-landing"
            onChange={(event)=>{setLocation(event.target.value)}}
            value={location}></input>

            <input type="submit" value="Join" className="input-landing btn"></input>
            <p>Already on LinkedIn? <a href="/login">Sign in</a></p> 
        </div>
        </form>
    )
};

export default SignUp;
