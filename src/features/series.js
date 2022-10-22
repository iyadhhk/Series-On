import { createSlice } from '@reduxjs/toolkit';

export const series = createSlice({
  name: 'series',
  initialState: {
    currentCategory: { id: 'trending', name: 'trending' },
    page: 1,
    searchTerm: '',
  },
  reducers: {
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.searchTerm = '';
    },
    searchMovie: (state, action) => {
      state.searchTerm = action.payload;
      state.currentCategory = { id: null, name: null };
    },
  },
});

export const { setCategory, searchMovie } = series.actions;

export default series.reducer;
