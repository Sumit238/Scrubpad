import React from "react"
import { useDispatch} from "react-redux";
import {newPage_reducer} from '../../../redux/slices/DrawingPages'
const NewPage=(props)=>{
    const dispatch=useDispatch();
    return(
        <button className="btn btn-primary" onClick={e=>dispatch(newPage_reducer({value:1}))}>New Page</button>
    )
}

export default NewPage