import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk('cars/fetchAll', async (page) => {
  const url = new URL('https://65e76d4c53d564627a8ecc6e.mockapi.io/cars');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 12);
  const response = await axios.get(url);
  return response.data;
});
