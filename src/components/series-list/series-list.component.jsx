import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

const SeriesList = ({ series }) => {
  return (
    <Grid container>
      {series?.results?.map((serie, idx) => (
        <h4 key={serie.id}>{serie.name}</h4>
      ))}
    </Grid>
  );
};

export default SeriesList;
