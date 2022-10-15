import "./style.css";
import LandingBar from "../landingbar/LandingBar";
import SignUp from "../signup/SignUp";

const Landing = () => {
    return (<>
    <div className="main">
        <div className="main-element">
            <LandingBar></LandingBar>
            <h1>Join the biggest<br></br> professional community</h1>
            <SignUp></SignUp>
        </div>
        <div className="main-element">
            <img src="landing.png"></img>
        </div>
    </div>    
    </>
    )
};

export default Landing;
