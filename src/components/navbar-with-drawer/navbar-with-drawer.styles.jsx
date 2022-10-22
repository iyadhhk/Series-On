import { AppBar, IconButton, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppNavbar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: '60px',
  justifyContent: 'center',
  background: 'linear-gradient(90deg, rgba(32,34,54,1) 0%, rgba(50,65,98,1) 100%)',
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: '10px',
  color: 'white',
}));

const drawerWidth = 220;

export const CustomDrawer = styled((props) => <Drawer {...props} />)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    backgroundColor: 'transparent',
    border: 'none',
    boxSizing: 'border-box',
    width: drawerWidth,
  },
}));
