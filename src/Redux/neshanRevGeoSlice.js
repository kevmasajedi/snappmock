import { createSlice } from "@reduxjs/toolkit"; 
import * as api from "../API";

export const neshanRevGeoSlice = createSlice({
    name: 'neshanReverseGeocoding', 
    initialState: {
        data: {}
    },
    reducers: { 
        getRevGeoData: (state, {lat, long}) => {
            api.getRevGeoData({lat, long}).then(resp => state.data = resp)
        }
    }
})
 
export const {getRevGeoData} = neshanRevGeoSlice.actions ;

export default neshanRevGeoSlice.reducer; 