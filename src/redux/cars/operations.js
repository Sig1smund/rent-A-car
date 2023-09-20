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

// export const setFavorite = (state, { payload }) => {
//   console.log(state.favorite);
//   const favsId = [...state.favorite].map((car) => car.id);
//   if (favsId.includes(payload.id)) {
//     state.favorite = state.favorite.filter((car) => car.id !== payload.id);
//   } else {
//     state.favorite = [payload, ...state.favorite];
//   }
// };
