import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const NESHAN_BASE_URL = "https://api.neshan.org/v5";

const client = axios.create({
  baseURL: NESHAN_BASE_URL,
  headers: {
    "Api-Key": process.env.REACT_APP_NESHAN_SERVICE_API_KEY,
  },
});

export const getRevGeoData = createAsyncThunk(
  "neshan/getReverseGeoData",
  ({ lat, long }) => {
    client.get(`/reverse?lat=${lat}&lng=${long}`).then((resp) => resp.data);
  }
);
