import  useReducer  from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"
const appStore=configureStore(
    {
        reducer:{
            user:useReducer,
            movies:movieReducer
        }
    }
);

export default appStore; 