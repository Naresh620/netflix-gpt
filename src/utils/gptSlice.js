import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice(
    {
        name:"gpt",
        initialState:{
            ShowGptSearch:false
        },
        reducers:{
            toggleGptsearchview:(state,action)=>{
                state.ShowGptSearch=!state.ShowGptSearch
            }
        }
    }
);

export const{toggleGptsearchview}=gptSlice.actions;
export default gptSlice.reducer;