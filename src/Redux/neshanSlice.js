import { createSlice } from "@reduxjs/toolkit"; 
import * as api from "../API";

export const neshanSlice = createSlice({
    name: 'neshan', 
    initialState: {
        revGeoData: {}
    },
    reducers: { }, 
    extraReducers: (builder) => {
        builder.addCase(api.getRevGeoData.fulfilled , (state, action) => { 
            state.revGeoData = action.payload
        }); 
    }
})
  

export default neshanSlice.reducer; 