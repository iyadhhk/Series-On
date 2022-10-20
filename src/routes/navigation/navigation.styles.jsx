import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import BackgroundImage from '../../assets/img/background.png';

export const AppContainer = styled(Box)(() => ({
  display: 'flex',
  border: '1px solid red',
  minHeight: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: 'left top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const MainContent = styled(Box)(() => ({
  flexGrow: 1,
  marginTop: '60px',
  border: '1px solid green',
  padding: 3,
}));
