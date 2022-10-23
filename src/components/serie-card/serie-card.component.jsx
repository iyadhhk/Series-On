import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Grow, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { PosterContainer, Poster, RatingBadge, Title } from './serie-card.styles';

const SerieCard = ({ serie, idx }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 4,
      }}>
      <Grow in key={idx} timeout={(idx + 1) * 300}>
        <Box
          component={Link}
          to={`/serie/${serie.id}`}
          sx={{
            textDecoration: 'none',
            alignItems: 'center',
            fontWeight: 'bolder',
          }}>
          <Paper
            elevation={12}
            square
            sx={{
              position: 'relative',
              height: '300px',
              width: '200px',
            }}>
            <RatingBadge>
              <Typography variant='caption'>
                {Number(serie.vote_average.toFixed(1)) === 0
                  ? '1'
                  : Number(serie.vote_average.toFixed(1))}
              </Typography>
            </RatingBadge>
            <PosterContainer>
              <Poster
                alt={serie.name}
                src={
                  serie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
                    : 'https://www.fillmurray.com/200/300'
                }
              />
            </PosterContainer>
          </Paper>
          <Title variant='body1'>{serie.name}</Title>
          <Typography
            variant='caption'
            sx={{ color: 'textSecondary', fontWeight: '600' }}>
            {serie?.first_air_date?.split('-')[0]}
          </Typography>
        </Box>
      </Grow>
    </Grid>
  );
};

export default SerieCard;
