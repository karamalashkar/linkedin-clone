import "./style.css";

const SignIn = () => {
    return (
        <div className="sign">
            <h2>Sign In</h2>
            <h4>Stay updated on your professional world</h4>
            <input type="email" placeholder="Email" className="input"></input>
            <input type="password" placeholder="Password" className="input"></input>
            <input type="submit" value="Join" className="input btn"></input>
        </div>
    )
};

export default SignIn;
