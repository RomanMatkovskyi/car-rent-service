import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65e76d4c53d564627a8ecc6e.mockapi.io';

export const fetchCars = createAsyncThunk('cars/fetchAll', async () => {
  const response = await axios.get('/cars');
  return response.data;
});
