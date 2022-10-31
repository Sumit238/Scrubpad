import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../Canvas/DrawingCanvas.module.css";
import { useEffect } from 'react';
const DrawingCanvas=(props)=>{
    
    const items=useSelector((state)=>state);
    console.log("New Cansvas");
    console.log("Helloooo",items)
    let prvX=undefined;
    let prvY=undefined;
    let isMousePressed=false;
    const mode=items.ToolBox.writeMode;
    const setMouseUp=()=>{
        prvX=undefined;
        prvY=undefined;
        isMousePressed=false;
    }
    const setMouseDown=()=>{
        console.log('Ji')
        isMousePressed=true;
    }
    const drawCircle=(X,Y,c)=>{
        let ctx = c.getContext("2d");
        c.style.cursor='pointer'

        const size=items.ToolBox.pointerSize;
        const color=items.ToolBox.pointerColor;
        ctx.beginPath();
        ctx.arc(X, Y,size , 0, 2 * Math.PI);
        ctx.fillStyle =color;
        ctx.fill();
    }
    const drawLine=(x,y,prvX,prvY,c)=>{
                    c.style.cursor='pointer'

        let ctx = c.getContext("2d");
        ctx.beginPath();
        const size=items.ToolBox.pointerSize;
        const color=items.ToolBox.pointerColor;
        ctx.moveTo(prvX, prvY);
        ctx.lineTo(x, y);
        ctx.strokeStyle =color;
        ctx.lineWidth = size*2;
        ctx.stroke();
    }
    const Erase=(x,y,c)=>{
        const size=items.ToolBox.pointerSize;
        let ctx = c.getContext("2d");
        ctx.clearRect(x, y, size, size);
    }
    const write=(e)=>{
        const c=e.target;
        var rect = e.target.getBoundingClientRect();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;
        if(isMousePressed){
            console.log("from Write mode",mode);
            if(mode){
                drawCircle(x,y,c);
                drawLine(x,y,prvX,prvY,c);
                drawCircle(prvX,prvY,c)
                prvX=x;
                prvY=y;
        
            }
            if(!mode){
                console.log("Hiiii")
                Erase(x,y,c);
            }
        }
        
        return ;
    }
    const saveCanvas=(e)=>{
        console.log(items)
        const id =items.DrawingPages.onDisplay;
        console.log(id, 'from save Canvas');
        const canvas=document.getElementById(id);
        console.log(canvas)
        console.log('canvas saved')
        localStorage.setItem(id, canvas.toDataURL("image/jpeg", 1.0));
    }
    useEffect(() => {
        const id =items.DrawingPages.onDisplay;
        if(!id){
            return;
        }
        var dataURL = localStorage.getItem(id);
        if(!dataURL){
            return;
        }
        var img = new Image();
        img.src = dataURL;
        const canvas=document.getElementById(id);
        const ctx = canvas.getContext('2d');
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
      })
      useEffect(() => {
        const intervalId = setInterval(saveCanvas, 5000)
      
        return () => clearInterval(intervalId); //This is important
       
      })
    
    
    return (
    <React.Fragment>
        {!items.DrawingPages.onDisplay && <p style={{color:'white'}}>Please create New page</p>}
        {items.DrawingPages.onDisplay&& <><canvas id={items.DrawingPages.onDisplay} width="1000" className={styles['dr-canvas']} height="600"  onMouseMove={write} onMouseUp={setMouseUp} onMouseDown={setMouseDown}/>
        <button onClick={saveCanvas}>Save</button></>}
        
    </React.Fragment>
    )
}

export default DrawingCanvas;
