import React from "react";
import { useDispatch } from 'react-redux';
import {changeWriteMode_reducer} from '../../redux/slices/ToolBox'
import { useSelector } from 'react-redux';

const EraserButton=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state)
    const mode=items.ToolBox.writeMode;
    console.log("mode",mode)
    return (
        <div>
            <button className="btn" onClick={e=>dispatch(changeWriteMode_reducer({mode:1}))}>Write</button>
            <button className="btn" onClick={e=>dispatch(changeWriteMode_reducer({mode:0}))}>Erase</button>
        </div>
    )
}
export default EraserButton;