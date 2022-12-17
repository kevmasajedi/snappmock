
import axios from "axios";

const NESHAN_BASE_URL = "https://api.neshan.org/v5" 

const client = axios.create({
    baseURL: NESHAN_BASE_URL , 
    headers: {
        'Content-Type': 'application/json', 
        'Api-Key':process.env.REACT_APP_NESHAN_SERVICE_API_KEY
    }
})

export function getRevGeoData(lat, long) {
    return client.get(`/reverse?lat=${lat}&lng=${long}`)
}