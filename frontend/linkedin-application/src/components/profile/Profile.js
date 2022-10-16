import "./style.css";
import Button from "../button/Button";

const Profile = () =>{
    return(
        <div className="profile">
            <div className="cover"></div>
            <img className="profile-image" src="landing.png"></img>
            <div className="buttons">
                <Button text={'Edit'}></Button>
                <Button text={'Company'}></Button>
                <Button text={'Logout'}></Button>
            </div>    
            <div className="profile-info">
                <h1></h1>
                <h3></h3>
                <h4></h4>
                <p className="bio"></p>
            </div>
        </div>
    )    
}

export default Profile;