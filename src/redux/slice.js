import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    favorite: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favorite.push(action.payload);
    },
    deleteFavorite(state, action) {
      const index = state.findIndex((car) => car === action.payload);
      state.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addFavorite, deleteFavorite } = carsSlice.actions;
// Редюсер слайсу
export const carsReducer = carsSlice.reducer;
