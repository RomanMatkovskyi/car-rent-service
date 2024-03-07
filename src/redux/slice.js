import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {})
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {});
  },
});

// Генератори екшенів
export const { addFavorite, deleteFavorite } = carsSlice.actions;
// Редюсер слайсу
export const carsReducer = carsSlice.reducer;
