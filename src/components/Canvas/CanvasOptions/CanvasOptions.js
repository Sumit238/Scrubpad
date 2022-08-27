import React from "react"
import ChangeCanvas from "./ChangeCanvas"
import DeleteCanvas from "./DeleteCanvas";
import NewPage from "./NewPage";
const CanvasOptions=(props)=>{
    return (
        <div>
            <ChangeCanvas changePage={props.changePage} pageId={props.pageId}/>
            <DeleteCanvas deletePage={props.deletePage} pageId={props.pageId}/>
            <NewPage addNewPage={props.addNewPage}/>
        </div>
    )
}
export default CanvasOptions;