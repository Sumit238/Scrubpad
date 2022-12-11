import React from "react";
import {useSelector } from 'react-redux';
import {BiTrash} from "react-icons/bi";
import './ToolBox.css'
const ClearCanvas=(props)=>{
    const items=useSelector((state)=>state)
    const id =items.DrawingPages.onDisplay

    return(
        <button className={props.className} onClick={()=>{ const canvas =document.getElementById(id);canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);}}>
            <BiTrash/>
        </button>
    )
}

export default ClearCanvas;