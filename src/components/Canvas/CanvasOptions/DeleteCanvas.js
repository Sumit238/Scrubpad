import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {deletePage_reducer} from '../../../redux/slices/DrawingPages'
const DeleteCanvas=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state.DrawingPages)
    console.log(items)
    return(
         <button id="clearCanvas" className="btn btn-danger" onClick={e=>dispatch(deletePage_reducer({id:items.onDisplay}))}>Delete Page</button>
    )
}

export default DeleteCanvas;