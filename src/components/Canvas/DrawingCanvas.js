import React from 'react';
import './DrawingCanvas.css';
const DrawingCanvas=(props)=>{
    return (
    <React.Fragment>
        <canvas id="canvas" width="1000" height="600" onMouseMove={props.onMouseMove} onMouseUp={props.onMouseUp} onMouseDown={props.onMouseDown}>{props.key}</canvas>
    </React.Fragment>
    )
}

export default DrawingCanvas;
