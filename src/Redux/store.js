import { configureStore } from "@reduxjs/toolkit";
import revGeoReducer from "./neshanSlice"; 

export default configureStore({
    reducer: {
        revGeo : revGeoReducer
    }, 
})