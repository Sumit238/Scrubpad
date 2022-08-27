const DeleteCanvas=(props)=>{
    return(
        <button id="clearCanvas" className="btn btn-outline-secondary" onClick={props.deletePage}>Delete Page</button>
    )
}

export default DeleteCanvas;