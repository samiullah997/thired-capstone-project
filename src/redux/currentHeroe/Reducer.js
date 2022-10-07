import { createSlice } from '@reduxjs/toolkit';
import { getHero } from './CurrentHeroSlice';

const initialState = {
  hero: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Reducer
const currentHeroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    cleanupHero: (state, action) => ({
      ...state,
      status: 'idle',
      hero: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHero.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getHero.fulfilled, (state, action) => ({
        ...state,
        hero: action.payload,
        status: 'succeeded',
      }))
      .addCase(getHero.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const { cleanupHero } = currentHeroSlice.actions;
export default currentHeroSlice.reducer;
