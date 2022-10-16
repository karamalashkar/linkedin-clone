import "./style.css";

const AddJob = ({open,onClose}) => {
    if(!open){
        return null
    }
    return(
        <div className="edit">
            <div className="edit-item">
                <button className="close" onClick={onClose}>
                    x
                </button>
                <h1>Add Job</h1>
                <input type="text" className="edit-input" placeholder="Tile"></input>
                <textarea className="edit-input text" placeholder="Description" maxLength="850"></textarea>
                <button className="edit-button">Add</button>
            </div>
        </div>
    )
}

export default AddJob;