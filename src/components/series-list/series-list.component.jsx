import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import SerieCard from '../serie-card/serie-card.component';

const SeriesList = ({ series }) => {
  return (
    <Grid container>
      {series?.results?.map((serie, idx) => (
        <SerieCard key={serie.id} serie={serie} idx={idx} />
      ))}
    </Grid>
  );
};

export default SeriesList;
