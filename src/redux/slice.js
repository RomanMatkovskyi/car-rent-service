import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    favorite: [],
    isLoading: false,
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
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(...action.payload);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// Генератори екшенів
export const { addFavorite, deleteFavorite } = carsSlice.actions;
// Редюсер слайсу
export const carsReducer = carsSlice.reducer;
