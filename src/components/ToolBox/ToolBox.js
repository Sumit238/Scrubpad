import React from 'react'
import './ToolBox.css'
import PointerSize from './PointerSize'
import ChangeColor from './ChangeColor'
import ClearCanvas from './ClearCanvas'
import EraserButton from './EraserButton'

const Toolbox=(props)=>{
    // const items=useSelector((state)=>state)
    // console.log(items)
    return(
        <div className='d-flex'>
            <PointerSize size={props.size} />
            <ChangeColor/>
            <ClearCanvas/>
            <EraserButton changeWriteMode={props.changeWriteMode}/>
        </div>
    )
}
export default Toolbox;
