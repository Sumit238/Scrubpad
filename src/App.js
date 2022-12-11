import React from 'react';
import DrawingCanvas from './components/Canvas/DrawingCanvas';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import CanvasOptions from './components/ToolBox/CanvasOptions/CanvasOptions';
import { useSelector } from 'react-redux';
import ToolBox from './components/ToolBox/ToolBox';
function App() {
  const items=useSelector((state)=>state)
  return (
    <div className="App" id='App'>
        <NavBar/>
        <CanvasOptions/>
        <DrawingCanvas key={items.DrawingPages.onDisplay}/>    
        <ToolBox/> 
    </div>
    
  );
}

export default App;
