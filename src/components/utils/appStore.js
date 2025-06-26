import  useReducer  from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
const appStore=configureStore(
    {
        reducer:{
            user:useReducer
        }
    }
);

export default appStore;