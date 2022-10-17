import { useState } from "react";
import { login } from "../../hooks/login";
import { useNavigate } from "react-router-dom";
import "./style.css";

const SignIn = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const onSubmit = async (e)=>{
        e.preventDefault();
        if(!email || !password){
            return null;
        }

        const post={email,password};
        const user = await login(post);
        console.log(user.data.user.name);
        localStorage.setItem('id',user.data.user._id);
        localStorage.setItem('token',user.data.token);
        localStorage.setItem('name',user.data.user.name);
        localStorage.setItem('email',user.data.user.email);
        localStorage.setItem('location',user.data.user.location);
        localStorage.setItem('bio',user.data.user.bio);
        localStorage.setItem('image',user.data.user.image);
        if(user.data.user.company){
            localStorage.setItem('id_company',user.data.user.company._id);
            localStorage.setItem('name_company',user.data.user.company.name);
            localStorage.setItem('category_company',user.data.user.company.company_category);
            localStorage.setItem('bio_company',user.data.user.company.bio);                
        }    
        else{
            localStorage.setItem('id_company','0');
        }    
        navigate("/home")
        setEmail('');
        setPassword('');
    }
        
    return (
        <>
        <form onSubmit={onSubmit}>
        <div className="sign">
            <h2 className="signin-title">Sign In</h2>
            <h4 className="signin-subtitle">Stay updated on your professional world</h4>
            
            <input type="email" 
            placeholder="Email" 
            className="input-login"
            onChange={(event)=>{
            setEmail(event.target.value)}}
            value={email}></input>
            
            <input type="password" 
            placeholder="Password" 
            className="input-login"
            onChange={(event)=>{
            setPassword(event.target.value)}}
            value={password}></input>
            
            <input type="submit" value="Sign in" className="input-login btn"></input>        
        </div>
        </form>
        </>
    )
};

export default SignIn;
