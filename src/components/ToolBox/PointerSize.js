import React from "react"

const PointerSize=(props)=>{
    return (
        <section>
            <label htmlFor="PointerSize">Pointer Size</label>
            <div id="PointerSize"className="btn-group" role="group" aria-label="Basic example">
                    <button  id="Dradius" className="btn btn-secondary" onClick={props.changeSize}>-</button>
                    <label id="cursize" className="input-group-text">{props.size}</label>
                    <button id="Iradius" className="btn btn-secondary" onClick={props.changeSize}>+</button>
            </div>
        </section>
    )
}

export default PointerSize;