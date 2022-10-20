import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get genres list
    getGenres: builder.query({
      query: () => `genre/tv/list?api_key=${tmdbApiKey}`,
    }),
    // Get series by category and genre id
    getSeries: builder.query({
      query: ({ currentCategory, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          return `/search/tv?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}&include_adult=false`;
        }
        // Get Movies by category name
        if (currentCategory && typeof currentCategory === 'string') {
          if (currentCategory === 'trending') {
            return `trending/tv/week?api_key=${tmdbApiKey}`;
          }
          return `tv/${currentCategory}?api_key=${tmdbApiKey}&page=1`;
        }
        // Get Movies by genre id
        return `discover/tv?with_genres=${currentCategory}&page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetGenresQuery, useGetSeriesQuery } = tmdbApi;
