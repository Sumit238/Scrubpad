import React from 'react'
import './ToolBox.css'
import PointerSize from './PointerSize'
import ChangeColor from './ChangeColor'
import ClearCanvas from './ClearCanvas'
import EraserButton from './EraserButton'
import SaveCanvas from './SaveCanvas';
import DownloadCanvas from './CanvasOptions/CanvasDownload';
import NewPage from './CanvasOptions/NewPage'
import DeleteCanvas from './CanvasOptions/DeleteCanvas'
import WriteButton from './WriteButton'
const ToolBox=(props)=>{
    // const items=useSelector((state)=>state)
    // console.log(items)
    return(
        <div class="toolbar">
            <WriteButton className="tool brush" data-tool-tip="Brush Size &amp; Opacity" />
            <EraserButton className="tool eraser" id="eraserTool" data-tool-tip="Eraser Tool" />
            <SaveCanvas className="tool save" data-tool-tip="Save Canvas"/>
            <ClearCanvas className="tool clear" data-tool-tip="Clear Canvas"></ClearCanvas>
            <DownloadCanvas className="tool dl" data-tool-tip="Download As PNG" id="download"/>
            <ChangeColor className="tool colorSelector" value="#e53935"/>
            <PointerSize />
            <NewPage/>
            <DeleteCanvas/>

     </div>
    //     {
    //         // <div className='d-flex'>
    //     //     <PointerSize size={props.size} />
    //     //     <ChangeColor/>
    //     //     <ClearCanvas/>
    //     //     <EraserButton changeWriteMode={props.changeWriteMode}/>
    //     // </div>
    // }
    )
}
export default ToolBox;
