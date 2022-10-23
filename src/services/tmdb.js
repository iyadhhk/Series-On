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
      query: ({ currentCategory: { id, name }, page, searchTerm }) => {
        // Get Movies by Search
        if (searchTerm) {
          return `/search/tv?query=${searchTerm}&page=${page}&api_key=${tmdbApiKey}&include_adult=false`;
        }
        // Get Movies by category name
        if (id && typeof id === 'string') {
          if (id === 'trending') {
            return `trending/tv/week?api_key=${tmdbApiKey}&page=${page}`;
          }
          return `tv/${id}?api_key=${tmdbApiKey}&page=${page}`;
        }
        // Get Movies by genre id
        return `discover/tv?with_genres=${id}&page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
  }),
});

export const { useGetGenresQuery, useGetSeriesQuery } = tmdbApi;
