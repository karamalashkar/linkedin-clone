import "./style.css";
import LandingBar from "../landingbar/LandingBar";
import SignIn from "../signin/SignIn";

const Login = () => {
    return (
        <div>
            <LandingBar></LandingBar>
            <div className="login-body">
                <SignIn></SignIn>
            </div>
        </div>
    )
};

export default Login;
