import React from "react";
import { useDispatch } from 'react-redux';
import {changeWriteMode_reducer} from '../../redux/slices/ToolBox'
import { useSelector } from 'react-redux';
import {BiPencil} from "react-icons/bi";

const WriteButton=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state)
    const mode=items.ToolBox.writeMode;
    console.log("mode",mode)
    return (
        <div>
            <button className={props.className} onClick={e=>dispatch(changeWriteMode_reducer({mode:1}))}><BiPencil/></button>
        </div>
    )
}
export default WriteButton;