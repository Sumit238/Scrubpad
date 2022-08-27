import React from "react";

const EraserButton=(props)=>{
    return (
        <section>
            <label htmlFor="Eraser">Eraser</label>
            <button onClick={props.changeWriteMode}>Eraser</button>
        </section>
    )
}

export default EraserButton;