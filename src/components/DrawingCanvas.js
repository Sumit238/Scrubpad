import React ,{useState} from 'react';
import Toolbox from './ToolBox/ToolBox';
import './DrawingCanvas.css';

const DrawingCanvas=()=>{
    let isMousePressed=false;
    let prvX=undefined;
    let prvY=undefined;
    const [size,setSize]=useState(1);
    const [color,setcolor]=useState('#000000')
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
        ctx.beginPath();
        ctx.arc(X, Y, size, 0, 2 * Math.PI);
        ctx.fillStyle =color;
        ctx.fill();
    }
    const drawLine=(x,y,prvX,prvY,c)=>{
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(prvX, prvY);
        ctx.lineTo(x, y);
        ctx.strokeStyle =color;
        ctx.lineWidth = size*2;
        ctx.stroke();
    }
    const changeSize=(e)=>{
        let a=1;
        if(e.target.innerText=='-'){
            a=-1;
        }
        const cursize=document.getElementById('cursize')
        if(size+a<=0){
            setSize(1);
            cursize.innerText=size;
            return;
        }
        if(size+a>=60){
            setSize(60);
            cursize.innerText=size;
            return;
        }
        setSize((sizeC)=>{return sizeC+a});
        cursize.innerText=size;
        return;

    }
    const write=(e)=>{
        //alert(e.offsetX+' '+e.offsetY)
        const c=e.target;
        c.style.cursor='pointer';
        if(isMousePressed){
            var rect = e.target.getBoundingClientRect();
            var x = e.pageX - rect.left;
            var y = e.pageY - rect.top;
            drawCircle(x,y,c);
            drawLine(x,y,prvX,prvY,c);
            drawCircle(prvX,prvY,c)
            prvX=x;
            prvY=y;
    
        }
        
    }

    return (
    <React.Fragment>
        <canvas id="canvas" width="1000" height="600" onMouseMove={write} onMouseUp={setMouseUp} onMouseDown={setMouseDown}></canvas>
        <Toolbox changeSize={changeSize} size={size}  colorChange={(e)=>{setcolor(e.target.value)}}/>
    </React.Fragment>
    )
}

export default DrawingCanvas;