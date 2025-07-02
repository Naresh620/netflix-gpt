import  useReducer  from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice";
import langReducer from "./configs";
const appStore=configureStore(
    {
        reducer:{
            user:useReducer,
            movies:movieReducer,
            gpt:gptReducer,
            configs: langReducer,
        }
    }
);

export default appStore; 