const write=(e)=>{
    const c=e.target;
    var rect = e.target.getBoundingClientRect();
    let prvX=undefined;
    let prvY=undefined;
    var x = e.pageX - rect.left;
    var y = e.pageY - rect.top;
  let isMousePressed=true;
    const Erase=(x,y,c)=>{
        let ctx = c.getContext("2d");
        ctx.clearRect(x, y, size, size);
    }
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

  export default  write;