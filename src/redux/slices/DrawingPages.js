import { createSlice } from "@reduxjs/toolkit/dist";
import { v4 as uuid } from 'uuid';
const DrawingPagesSlice=createSlice({
    name:"DrawingPages",
    initialState:{
        onDisplay:1,
        pages:[{
            id:1,
            content:"xms"
        }]
    },
    reducers:{
        newPage_reducer:(state,action)=>{
            const newPageId=uuid();
            return {onDisplay:newPageId,pages:[...state.pages,{id:newPageId,content:"xmx"}]}
        },
        deletePage_reducer:(state,action)=>{
            const id =action.payload.id;
            if(!id ||state.pages.length<=0){
                return {...state};
            }
            localStorage.removeItem(id);
            let displayId=undefined;
            for(let i=0;i<state.pages.length;i++){
                if(state.pages[i].id===id && i-1>=0){
                    displayId=state.pages[i-1].id
                    break;
                }
                if(state.pages[i].id===id && i+1<state.pages.length){
                    displayId=state.pages[i+1].id
                    break;
                }
            }
            const newStatePages=state.pages.filter((page)=>{
                return page.id!==id;
            })
            return {onDisplay:displayId,pages:newStatePages};
        },
        changeDisplayPage_reducer:(state,action)=>{
            const id =action.payload.id;
            let displayId=undefined;
            console.log("lenght",state.pages.length)
            for(let i=0;i<state.pages.length;i++){
                console.log(state.pages[i].id,action.payload.dir,id);
                if(state.pages[i].id===id && i-1>=0 && action.payload.dir==="PREVIOUS"){
                    displayId=state.pages[i-1].id;
                    break;
                }
                if(state.pages[i].id===id && i+1<state.pages.length && action.payload.dir==="NEXT"){
                    displayId=state.pages[i+1].id;
                    break;
                }
            }
            if(!displayId){
                return {...state};
            }
            console.log(displayId)
            
            return {...state,onDisplay:displayId};
        }



    }


})
export const {newPage_reducer,deletePage_reducer,changeDisplayPage_reducer}=DrawingPagesSlice.actions;
export default DrawingPagesSlice.reducer ;