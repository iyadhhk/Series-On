import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { useGetTvShowQuery } from '../../services/tmdb';

const SerieInformations = () => {
  const { id: tvShowId } = useParams();
  const { data, isFetching, error } = useGetTvShowQuery(tvShowId);

  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size='8rem' />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to='/'> something has gone wrong</Link>
      </Box>
    );
  }
  console.log(data);
  return (
    <Grid container sx={{ border: '1px solid red' }}>
      <Grid item container direction='column'>
        <Typography variant='h6'>{data.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default SerieInformations;
