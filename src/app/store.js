import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/tmdb';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
