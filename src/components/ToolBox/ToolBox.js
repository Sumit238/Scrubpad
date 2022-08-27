import React from 'react'
import ReactDOM from 'react-dom'
import './ToolBox.css'
import PointerSize from './PointerSize'
import ChangeColor from './ChangeColor'
import ClearCanvas from './ClearCanvas'
import EraserButton from './EraserButton'
const Tools=(props)=>{
    return(
            <div className="toolbox">
                    <span class="close" onClick={props.closeToolBox}>&times;</span>
                    <PointerSize changeSize={props.changeSize} size={props.size} />
                    <ChangeColor colorChange={props.colorChange}/>
                    <ClearCanvas/>
                    <EraserButton changeWriteMode={props.changeWriteMode}/>
            </div>
    )
}
const Toolbox=(props)=>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Tools {...props}/>,document.getElementById('App'))}
        </React.Fragment>
    ) 
}
export default Toolbox;
