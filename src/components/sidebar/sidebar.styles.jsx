import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SidebarMenu = styled(Box)(() => ({
  backgroundColor: '#202236',
  overflow: 'auto',
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
}));
