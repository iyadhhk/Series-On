import React, { useState } from 'react';
import { Toolbar, Button, useMediaQuery, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';

import NavbarLogo from '../navbar-logo/navbar-logo.component';
import Sidebar from '../sidebar/sidebar.component';

import { AppNavbar, MenuIconButton, CustomDrawer } from './navbar-with-drawer.styles';

const NavbarWithDrawer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <AppNavbar position='fixed' elevation={3}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <MenuIconButton edge='start' aria-label='menu' onClick={handleDrawerToggle}>
            <Menu />
          </MenuIconButton>
          <NavbarLogo />
          <Button sx={{ color: 'white' }}>Login</Button>
        </Toolbar>
      </AppNavbar>
      {isMobile ? (
        <CustomDrawer
          variant='temporary'
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}>
          <Toolbar />
          <Sidebar setMobileOpen={setMobileOpen} />
        </CustomDrawer>
      ) : (
        <CustomDrawer variant='permanent'>
          <Toolbar />
          <Sidebar />
        </CustomDrawer>
      )}
    </Box>
  );
};

export default NavbarWithDrawer;
