import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/tmdb';
import seriesReducer from '../features/series';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    series: seriesReducer,
  },
});
