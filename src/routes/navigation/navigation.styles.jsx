import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import BackgroundImage from '../../assets/img/background.png';

export const AppContainer = styled(Box)(() => ({
  border: '1px solid red',
  minHeight: '100vh',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundPosition: 'left top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const MainContent = styled(Box)(() => ({
  position: 'relative',
  top: '60px',
  border: '1px solid green',
  padding: 3,
}));
