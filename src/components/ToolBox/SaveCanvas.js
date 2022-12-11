import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BiSave } from "react-icons/bi";
const SaveCanvas=(props)=>{
    const items=useSelector((state)=>state);
    const saveCanvas=(e)=>{
        console.log(items)
        const id =items.DrawingPages.onDisplay;
        console.log(id, 'from save Canvas');
        const canvas=document.getElementById(id);
        console.log(canvas)
        console.log('canvas saved')
        localStorage.setItem(id, canvas.toDataURL("image/png", 1.0));
        
    }
    useEffect(() => {
        const intervalId = setInterval(saveCanvas, 1000)
      
        return () => clearInterval(intervalId); //This is important
       
    })
    return(
        
        <button className={props.className} onClick={saveCanvas}><BiSave/></button>
    )
}

export default SaveCanvas;