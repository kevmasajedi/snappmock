import { configureStore } from "@reduxjs/toolkit";
import revGeoReducer from "./neshanRevGeoSlice"; 

export default configureStore({
    reducer: {
        revGeo : revGeoReducer
    }, 
})