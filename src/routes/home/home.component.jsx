import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Stack } from '@mui/material';

import { useGetSeriesQuery } from '../../services/tmdb';

import SeriesList from '../../components/series-list/series-list.component';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { currentCategory } = useSelector((state) => state.series);
  const { data, error, isFetching } = useGetSeriesQuery({
    currentCategory,
    page: 1,
    searchTerm,
  });

  useEffect(() => {
    console.log('category changed to ', currentCategory);
  }, [currentCategory]);

  if (isFetching) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{ height: '50%' }}>
        <CircularProgress size='3rem' sx={{ color: '#fff' }} />
      </Box>
    );
  }
  return (
    <Stack>
      <SeriesList series={data} />
    </Stack>
  );
};

export default Home;
