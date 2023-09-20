import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations";

const initialState = {
  cars: [],
  favorite: [],
  total: 0,
  isLoading: false,
  error: null,
};

const setFavorite = (state, { payload }) => {
  const favsId = [...state.favorite].map((car) => car.id);
  if (favsId.includes(payload.id)) {
    state.favorite = state.favorite.filter((car) => car.id !== payload.id);
  } else {
    state.favorite = [payload, ...state.favorite];
  }
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: { manageFavs: setFavorite },
  extraReducers: (builder) =>
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
export const { manageFavs } = carsSlice.actions;
