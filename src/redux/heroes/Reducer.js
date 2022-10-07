import { createSlice } from '@reduxjs/toolkit';
import getHeroes from './heroesSlice';

const initialState = {
  heroes: [],
  filteredHeroes: [],
  status: 'idle',
  error: null,
};
// Reducer
const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    filterHeroes: (state, action) => ({
      ...state,
      filteredHeroes: [...state.heroes.filter(({ publisher }) => publisher === action.payload)],
    }),
    load20Heroes: (state, action) => ({
      ...state,
      filteredHeroes: action.payload,
    }),
  },
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

export const { filterHeroes, load20Heroes } = heroesSlice.actions;
export const allHeroes = (state) => state.heroes.heroes;
export const allFilteredHeroes = (state) => state.heroes.filteredHeroes;
export const allStatus = (state) => state.heroes.status;
export const allMesssages = (state) => state.heroes.message;

export default heroesSlice.reducer;
