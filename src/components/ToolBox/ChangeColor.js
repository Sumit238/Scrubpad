import React from "react";
import { useDispatch } from 'react-redux';
import {colorChange_reducer} from '../../redux/slices/ToolBox'
import { useSelector } from 'react-redux';
const ChangeColor=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state)
    console.log(items.ToolBox.pointerColor)
    return(
        <div>
            <input type="color" name="color" id="selectColor" width="5px" className="form-control" aria-label="Text input with radio button" onChange={e=>dispatch(colorChange_reducer({color:e.target.value}))}/>
        </div>
    )
}
export default ChangeColor;