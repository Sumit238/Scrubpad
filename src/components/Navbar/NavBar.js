import React, { useState } from "react";
import Toolbox from "../ToolBox/ToolBox";
import styles from "./NavBar.module.css";
const NavBar = (props) => {
  const [disToolBox, setdisToolBox] = useState(false);
  return (
    <React.Fragment>
      {disToolBox && (
        <Toolbox changeSize={props.changeSize} size={props.size}  colorChange={props.colorChange} changeWriteMode={props.changeWriteMode} closeToolBox={()=>{setdisToolBox(false)}}/>
      )}
      <nav className={`${styles["navbar"]}`}>
        <span className={styles["navbar-brand"]}>scru</span>
        <button
          onClick={() => {
            setdisToolBox(true);
          }}
        >Hiii</button>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
