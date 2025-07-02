import { createSlice } from "@reduxjs/toolkit";

const configs=createSlice(
    {
        name:"Lang",
        initialState:{
            lang:"en"
        },
        reducers:{
            gptViewSupportLang:(state,action)=>{
                state.lang=action.payload
            }
        }
    }
);

export const{gptViewSupportLang}=configs.actions;
export default configs.reducer;