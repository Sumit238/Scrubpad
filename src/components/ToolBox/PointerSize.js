import React from "react"
import { useDispatch } from 'react-redux';
import {changePointer_reducer} from '../../redux/slices/ToolBox'
import { useSelector } from 'react-redux';
import styles from './CanvasOptions/tools.module.css'
const PointerSize=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state)
    console.log(items.ToolBox.pointerSize)
    return (
        <div>
            <label htmlFor="PointerSize">Pointer Size</label>
            <div id="PointerSize"className="btn-group" role="group" aria-label="Basic example">
                    <button  id="Dradius" className="btn-secondary" onClick={e=>dispatch(changePointer_reducer({type:'DECREMENT'}))}>-</button>
                    <label id="cursize" className="input-group-text">{items.ToolBox.pointerSize}</label>
                    <button id="Iradius" className="btn-secondary" onClick={e=>dispatch(changePointer_reducer({type:'INCREMENT'}))}>+</button>
            </div>
        </div>
    )
}

export default PointerSize;