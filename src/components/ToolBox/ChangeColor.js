import React from "react";
const ChangeColor=(props)=>{

    return(
        <section>
            <label htmlFor="colorPick">change color</label>
            <div id="colorPick">
                    <input type="color" name="color" id="selectColor" aria-label="Text input with radio button" onChange={props.colorChange}/>
            </div>
        </section>
    )
}

export default ChangeColor;