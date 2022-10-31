import React from "react"
import ChangeCanvas from "./ChangeCanvas"
import DeleteCanvas from "./DeleteCanvas";
import NewPage from "./NewPage";
import DownloadCanvas from "./CanvasDownload"
const CanvasOptions=(props)=>{
    return (
        <ul className="pagination m-b-0">
         <DeleteCanvas deletePage={props.deletePage} pageId={props.pageId}/>
         <ChangeCanvas changePage={props.changePage} pageId={props.pageId}/>
         <NewPage addNewPage={props.addNewPage}/>
         <DownloadCanvas pp={'dd'}/>
        </ul>
    )
}
export default CanvasOptions;

