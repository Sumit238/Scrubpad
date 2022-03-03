import './ClearCanvas.css'
const ClearCanvas=()=>{

    return(
        <button id="clearCanvas" className="btn btn-outline-secondary" onClick={()=>{ const canvas =document.getElementById('canvas');canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);}}>ERASE ALL</button>
    )
}

export default ClearCanvas;