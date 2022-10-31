import { configureStore } from "@reduxjs/toolkit";
import ToolBoxReducers from "./slices/ToolBox";
import DrawingPagesReducers from "./slices/DrawingPages";
export const store= configureStore({
        reducer: {
            DrawingPages:DrawingPagesReducers,
            ToolBox:ToolBoxReducers,
            
        }
    }
)


/*
    variables : 
    1. pointer size;
    2. pointer color
    3. pointerState (erase,write)
    4.isMousePressed;




*/