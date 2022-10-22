import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import BackgroundImage from '../../assets/img/background.png';

export const AppContainer = styled(Box)(() => ({
  display: 'flex',
  height: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: 'left top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const MainContent = styled(Box)(() => ({
  overflowY: 'auto',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: 7,
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'darkgrey',
    outline: `1px solid slategrey`,
  },
  flexGrow: 1,
  marginTop: '80px',
  // padding: 3,
}));
