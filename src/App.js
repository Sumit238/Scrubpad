import React ,{useState,useContext} from 'react';
import DrawingCanvas from './components/Canvas/DrawingCanvas';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import CanvasOptions from './components/Canvas/CanvasOptions/CanvasOptions';
import ToolBoxContext from './store/ToolBox-Context';

function App() {
  let isMousePressed=false;
    const [Pages,setPages]=useState([{dburl:'jnwijd',
    id:1,
    pageN0:1,}]
  )
    let prvX=undefined;
    let prvY=undefined;
    const [size,setSize]=useState(1);
    const [color,setcolor]=useState('#000000');
    const [displayPage,setDisplayPage]=useState(1);
    const ToolBoxCtx=useContext(ToolBoxContext);
    const changePage=(e)=>{
      let a=1;
      if(e.target.innerText==='-'){
        a=-1;
      }
      if(displayPage+a<=Pages.length && displayPage+a>0){
        setDisplayPage(displayPage+a);
      }
    }
    const addNewPage=()=>{
      setPages((Pages)=>{
        return [...Pages,{dburl:'jnwijd',
        id:Pages.length+1,
        pageN0:Pages.length+1,}]
      })
      setDisplayPage(displayPage+1);
    }
    const deletePage=()=>{
      console.log(Pages)
      const newPages=[];
        for(let i=0;i<Pages.length;i++){
          if(i+1===displayPage){
            continue;
          }
          newPages.push(Pages[i]);
        }
      setPages(newPages)
      setDisplayPage(displayPage-1)
    }
    const setMouseUp=()=>{
        prvX=undefined;
        prvY=undefined;
        isMousePressed=false;
    }
    const setMouseDown=()=>{
        console.log('Ji')
        isMousePressed=true;
    }
    const drawCircle=(X,Y,c)=>{
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(X, Y, size, 0, 2 * Math.PI);
        ctx.fillStyle =color;
        ctx.fill();
    }
    const drawLine=(x,y,prvX,prvY,c)=>{
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(prvX, prvY);
        ctx.lineTo(x, y);
        ctx.strokeStyle =color;
        ctx.lineWidth = size*2;
        ctx.stroke();
    }
    const Erase=(x,y,c)=>{
        let ctx = c.getContext("2d");
        ctx.clearRect(x, y, size, size);
    }
    const changeSize=(e)=>{
        let a=1;
        if(e.target.innerText==='-'){
            a=-1;
        }
        const cursize=document.getElementById('cursize')
        if(size+a<=0){
            setSize(1);
            cursize.innerText=size;
            return;
        }
        if(size+a>=60){
            setSize(60);
            cursize.innerText=size;
            return;
        }
        setSize((sizeC)=>{return sizeC+a});
        cursize.innerText=size;
        return;

    }
    const write=(e)=>{
        const c=e.target;
        var rect = e.target.getBoundingClientRect();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;
        if(1){
            c.style.cursor='pointer';
            if(isMousePressed){
                drawCircle(x,y,c);
                drawLine(x,y,prvX,prvY,c);
                drawCircle(prvX,prvY,c)
                prvX=x;
                prvY=y;
        
            }
            return;
        }
        if(!ToolBoxCtx.penMode){
            
            if(isMousePressed){
                Erase(x,y,c);
        
            }
            
            return ;
        }
        
        
    }
  return (
    <div className="App" id='App'>
        <NavBar changeSize={changeSize} size={size}  colorChange={(e)=>{setcolor(e.target.value)}}/>
        {/* <Toolbox changeSize={changeSize} size={size}  colorChange={(e)=>{setcolor(e.target.value)}} changeWriteMode={changeWriteMode}/> */}
        {Pages.map((page)=>{
          if(displayPage===page.id){
            console.log(displayPage)
            return <DrawingCanvas KEY={page.id} pageId={displayPage} onMouseMove={write} onMouseUp={setMouseUp} onMouseDown={setMouseDown}/>      
          }
        })}
        <CanvasOptions changePage={changePage} pageId={displayPage} addNewPage={addNewPage} deletePage={deletePage}/>
    </div>
    
  );
}

export default App;
