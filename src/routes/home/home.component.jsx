import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, CircularProgress, Stack, Toolbar } from '@mui/material';

import { useGetSeriesQuery } from '../../services/tmdb';

import SeriesList from '../../components/series-list/series-list.component';
import Pagination from '../../components/pagination/pagination.component';
import MainContentHeader from '../../components/main-content-header/main-content-header.component';

const Home = () => {
  const [page, setPage] = useState(1);
  const { currentCategory, searchTerm } = useSelector((state) => state.series);
  const { data, error, isFetching } = useGetSeriesQuery({
    currentCategory,
    page,
    searchTerm,
  });

  useEffect(() => {
    setPage(1);
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
  console.log('home.component => ', data);
  return (
    <>
      <MainContentHeader />
      <Toolbar />
      <Stack>
        <SeriesList series={data} />
        <Pagination
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={data.total_pages}
        />
      </Stack>
    </>
  );
};

export default Home;
