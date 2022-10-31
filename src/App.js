import React from 'react';
import DrawingCanvas from './components/Canvas/DrawingCanvas';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import CanvasOptions from './components/Canvas/CanvasOptions/CanvasOptions';
import { useSelector } from 'react-redux';

function App() {
  const items=useSelector((state)=>state)
  return (
    <div className="App" id='App'>
        <NavBar/>
        <CanvasOptions/>
        <DrawingCanvas key={items.DrawingPages.onDisplay}/>     
       
    </div>
    
  );
}

export default App;
