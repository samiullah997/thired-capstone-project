import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import GET_HEROES from './ActionType';

// Thunks
const getHeroes = createAsyncThunk(GET_HEROES, async () => {
  try {
    return await api.fetchHeroes();
  } catch (error) {
    return error.message;
  }
});

export default getHeroes;
