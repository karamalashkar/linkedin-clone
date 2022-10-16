import "./style.css";

const EditProfile = () =>{
    return(
        <div className="edit">
            <div className="edit-item">
                <button className="close">
                    x
                </button>
                <h1>Edit Profile</h1>
                <input type="file" className="edit-input"></input>
                <input type="text" className="edit-input" placeholder="Location"></input>
                <textarea className="edit-input text" placeholder="Bio" maxlength="850"></textarea>
                <button className="edit-button">Edit</button>
            </div>
        </div>
    )    
}

export default EditProfile;