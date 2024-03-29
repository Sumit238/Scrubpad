import React from "react";
import { useDispatch } from 'react-redux';
import {changeWriteMode_reducer} from '../../redux/slices/ToolBox'
import { useSelector } from 'react-redux';
import {BiEraser} from "react-icons/bi";
const EraserButton=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state)
    const mode=items.ToolBox.writeMode;
    console.log("mode",mode)
    return (
        <div>
            <button className={props.className} onClick={e=>dispatch(changeWriteMode_reducer({mode:0}))}><BiEraser/></button>
        </div>
    )
}
export default EraserButton;