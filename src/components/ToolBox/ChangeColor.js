import React from "react";
import { useDispatch } from 'react-redux';
import {colorChange_reducer} from '../../redux/slices/ToolBox'
import { useSelector } from 'react-redux';
const ChangeColor=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state)
    console.log(items.ToolBox.pointerColor)
    return(
        <input type="color" name="color" className={props.className} onChange={e=>dispatch(colorChange_reducer({color:e.target.value}))}/>
    )
}
export default ChangeColor;