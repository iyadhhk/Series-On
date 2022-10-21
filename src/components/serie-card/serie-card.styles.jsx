import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Title = styled(Typography)(({ theme }) => ({
  // border: '1px solid green',
  textOverflow: 'ellipsis',
  color: theme.palette.textPrimary,
  width: '200px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: 0,
  textAlign: 'left',
}));

export const RatingBadge = styled(Box)(() => ({
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  bottom: '30px',
  right: '-15px',
  position: 'absolute',
  borderRadius: '100%',
  height: '30px',
  width: '30px',
  backgroundImage: 'radial-gradient(circle, rgba(234,92,23,1) 0%, rgba(241,66,4,1) 73%)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  zIndex: '10',
}));

export const Poster = styled('img')(() => ({
  position: 'static',
  height: '300px',
  marginBottom: '10px',
  transition: 'transform .3s',
}));

export const PosterContainer = styled(Box)(() => ({
  overflow: 'hidden',
  '&:hover': {
    '& img': {
      transform: 'scale(1.05)',
    },
  },
}));
