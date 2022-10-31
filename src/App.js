import React from 'react';
import DrawingCanvas from './components/Canvas/DrawingCanvas';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import CanvasOptions from './components/Canvas/CanvasOptions/CanvasOptions';

function App() {
  return (
    <div className="App" id='App'>
        <NavBar/>
        <CanvasOptions/>
        <DrawingCanvas/>     
       
    </div>
    
  );
}

export default App;
