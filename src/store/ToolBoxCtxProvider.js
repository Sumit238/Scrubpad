import ToolBoxContext from "./ToolBox-Context"
const changePointerSize=(e)=>{
    let a=1;
    let size=this.pointerSize;
        if(e.target.innerText==='-'){
            a=-1;
        }
        const cursize=document.getElementById('cursize')
        if(size+a<=0){
            this.pointerSize=1;
            cursize.innerText=size;
            return;
        }
        if(size+a>=60){
            this.pointerSize=60;
            cursize.innerText=size;
            return;
        }
        this.pointerSize=size+a;
        cursize.innerText=size+a;
        return;
}
const changePenMode=()=>{
    console.log(this.penMode,'jjjjjj')
    this.penMode=(this.penMode+1)%2;
}
const changeColor=(e)=>{this.penColor=e.target.value}
const ToolBoxCtxProvider=(props)=>{
    return <ToolBoxContext.Provider value={{
        pointerSize:10,
        penColor:'#000000',
        penMode:1, //1for write 0 for erase
        clearCanvas:()=>{},
        changePointerSize:changePointerSize,
        changeColor:changeColor,
        changePenMode:changePenMode,
    }}>
        {props.children}
    </ToolBoxContext.Provider>
}

export default ToolBoxCtxProvider;