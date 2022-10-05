import { createSlice } from '@reduxjs/toolkit';
import getHeroes from './heroesSlice';

const initialState = {
  heroes: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  message: 'hero',
};
// Reducer
const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHeroes.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getHeroes.fulfilled, (state, action) => ({
        ...state,
        heroes: action.payload,
        status: 'succeeded',
      }))
      .addCase(getHeroes.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const allHeroes = (state) => state.heroes.heroes;
export const allStatus = (state) => state.heroes.status;
export const allMesssages = (state) => state.heroes.message;

export default heroesSlice.reducer;
