import './ClearCanvas.css'
import React from "react";
import {useSelector } from 'react-redux';
const ClearCanvas=()=>{
    const items=useSelector((state)=>state)
    const id =items.DrawingPages.onDisplay

    return(
        <button className="btn" onClick={()=>{ const canvas =document.getElementById(id);canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);}}>ERASE ALL</button>
    )
}

export default ClearCanvas;