import { createSlice } from "@reduxjs/toolkit/dist";

const toolBoxSlice=createSlice({
    name:"ToolBox",
    initialState:{
        pointerSize: 5, 
        pointerColor: '#000000',
        pointerState :'write',
        writeMode:true
    },
    reducers:{
        changePointer_reducer:(state,action)=>{
            console.log(action)
            if(action.payload.type==='DECREMENT'){
                return {...state,pointerSize: Math.max(state.pointerSize-1,0)}
            }
            else if(action.payload.type==='INCREMENT'){
                return {...state,pointerSize: Math.min(state.pointerSize+1,30)}
            }
            else{
                return state;
            }
            
        },
        colorChange_reducer:(state,action)=>{
            if(action.payload.color){
                return {...state,pointerColor:action.payload.color}
            }
            return state
            
        },
        changeWriteMode_reducer:(state,action)=>{
            console.log("HIIIIIIIIIIIIIII",action)
            return {...state,writeMode:action.payload.mode}
        }

    }


})
export const {changePointer_reducer,colorChange_reducer,changeWriteMode_reducer}=toolBoxSlice.actions;
export default toolBoxSlice.reducer;