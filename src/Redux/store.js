import { configureStore } from "@reduxjs/toolkit";
import neshanReducer from "./neshanSlice"; 

export default configureStore({
    reducer: {
        neshan : neshanReducer
    }, 
})