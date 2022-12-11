import React from "react"
import { useDispatch} from "react-redux";
import {newPage_reducer} from '../../../redux/slices/DrawingPages'
import styles from './tools.module.css'
import { GrChapterAdd } from "react-icons/gr";
const NewPage=(props)=>{
    const dispatch=useDispatch();
    return(
        <button className={styles['tool']} onClick={e=>dispatch(newPage_reducer({value:1}))}><GrChapterAdd/></button>
    )
}

export default NewPage