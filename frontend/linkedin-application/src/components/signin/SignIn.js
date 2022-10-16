import "./style.css";

const SignIn = () => {
    return (
        <div className="sign">
            <h2 className="signin-title">Sign In</h2>
            <h4 className="signin-subtitle">Stay updated on your professional world</h4>
            <input type="email" placeholder="Email" className="input"></input>
            <input type="password" placeholder="Password" className="input"></input>
            <input type="submit" value="Sign in" className="input btn"></input>
        </div>
    )
};

export default SignIn;
