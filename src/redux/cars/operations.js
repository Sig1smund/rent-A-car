import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://650734223a38daf4803f3cec.mockapi.io/";

export const getCars = createAsyncThunk("cars/getCars", async (_, thunkAPI) => {
  try {
    const res = await axios.get("api/cars");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
