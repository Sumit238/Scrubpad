import React from "react"
import ChangeCanvas from "./ChangeCanvas"
const CanvasOptions=(props)=>{
    return (
        <ul className="pagination m-b-0">
         <ChangeCanvas changePage={props.changePage} pageId={props.pageId}/>
        </ul>
    )
}
export default CanvasOptions;

