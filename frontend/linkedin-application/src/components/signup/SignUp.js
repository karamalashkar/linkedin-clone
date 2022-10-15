import "./style.css";

const SignUp = () => {
    return (
        <div className="form">
            <input type="text" placeholder="Name" className="input"></input>
            <input type="email" placeholder="Email" className="input"></input>
            <input type="password" placeholder="Password" className="input"></input>
            <input type="text" placeholder="Location" className="input"></input>
            <input type="submit" value="Join" className="input btn"></input> 
        </div>
    )
};

export default SignUp;
