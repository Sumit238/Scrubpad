import React from "react";
import Toolbox from "../ToolBox/ToolBox";
const NavBar = (props) => {
  return (
    <React.Fragment>
      
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <span className="navbar-brand">scrubpad</span>
        <Toolbox />
        </div>
        
        
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
