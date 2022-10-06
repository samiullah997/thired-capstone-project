import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import GET_CURRENT_HERO from './ActionType';

// Thunks
export const getHero = createAsyncThunk(GET_CURRENT_HERO, async (hero) => {
  try {
    return await api.fetchCurrentHero(hero);
  } catch (error) {
    return error.message;
  }
});

export const currentHero = (state) => state.currentHero.hero;
export const currentHeroStatus = (state) => state.currentHero.status;

export default getHero;
