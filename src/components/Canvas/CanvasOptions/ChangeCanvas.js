import React from "react"
const ChangeCanvas=(props)=>{
    return(
        <section>
            <label htmlFor="PointerSize">Pointer Size</label>
            <div id="PointerSize"className="btn-group" role="group" aria-label="Basic example">
                    <button  id="Dradius" className="btn btn-secondary" onClick={props.changePage}>-</button>
                    <label id="cursize" className="input-group-text">{props.pageId}</label>
                    <button id="Iradius" className="btn btn-secondary" onClick={props.changePage}>+</button>
            </div>
        </section>
    )
}

export default ChangeCanvas;