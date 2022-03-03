import './ToolBox.css'
import React ,{useState} from "react"
import PointerSize from './PointerSize'
import ChangeColor from './ChangeColor'
import ClearCanvas from './ClearCanvas'
const Toolbox=(props)=>{
    return(
        <div className="toolbox">
            <PointerSize changeSize={props.changeSize} size={props.size} changeSize={props.changeSize} />
            <ChangeColor colorChange={props.colorChange}/>
            <ClearCanvas/>
        </div>
    ) 
}
export default Toolbox;
