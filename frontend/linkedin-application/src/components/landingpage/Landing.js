import "./style.css";
import LandingBar from "../landingbar/LandingBar";
import SignUp from "../signup/SignUp";

const Landing = () => {
    return (<>
    <div className="main">
        <LandingBar></LandingBar>
        <div className="landing-body">
            <div className="main-element">
                <h1 className="landing-title">Join the biggest<br></br> professional community</h1>
                <SignUp></SignUp>
            </div>
            <div className="main-element">
                <img src="landing.png"></img>
            </div>
        </div>
    </div>    
    </>
    )
};

export default Landing;
