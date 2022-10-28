import { configureStore } from "@reduxjs/toolkit";
import state from "./reducers/state";


export const store = configureStore({
    reducer:{
        state:state
    }
})