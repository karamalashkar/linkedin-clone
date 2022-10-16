import "./style.css";

const Navbar = () =>{
    return(
        <div className="main-nav">
            <div className="nav-item">
                <img src="linkedin.png"></img>
                <select>
                    <option value="">Search for a job</option>
                </select>
            </div>
            <div className="nav-item links">
                <a href="">Home</a>
                <a href="">Profile</a>
            </div>    
        </div>
    )
}

export default Navbar;