import React from "react"
import { useDispatch,useSelector } from "react-redux";
import {changeDisplayPage_reducer} from '../../../redux/slices/DrawingPages'
const ChangeCanvas=(props)=>{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state.DrawingPages);
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><span className="page-link" onClick={e=>dispatch(changeDisplayPage_reducer({dir:"PREVIOUS",id:items.onDisplay}))}>-</span></li>
                <li className="page-item"><span className="page-link">{items.onDisplay}</span></li>
                <li className="page-item"><span className="page-link" onClick={e=>dispatch(changeDisplayPage_reducer({dir:"NEXT",id:items.onDisplay}))}>+</span></li>
            </ul>
        </nav>
    )
}

export default ChangeCanvas;  