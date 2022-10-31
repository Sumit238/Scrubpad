import React from "react"
import jsPDF from "jspdf";
import {useSelector } from "react-redux";
const DownloadCanvas=(props)=>{
    const items=useSelector((state)=>state.DrawingPages);
    const downloadPDF=()=>{
        const doc = new jsPDF();
        items.pages.forEach(canvas => {
            
            const id =canvas.id
            if(!id){
                return;
            }
            const dataURL = localStorage.getItem(id);
            doc.addImage(dataURL, 'JPEG', 0, 0);
            doc.addPage();
        });
        doc.save('download.pdf');
    }
    return(
        <button className="btn btn-secondary" onClick={downloadPDF}>Download</button>
    )
}

export default DownloadCanvas;  