import React, { useState } from 'react';
import { Toolbar, Button, useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';

import NavbarLogo from '../navbar-logo/navbar-logo.component';

import { AppNavbar, MenuIconButton, CustomDrawer } from './navbar-with-drawer.styles';

const NavbarWithDrawer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppNavbar position='fixed' elevation={3}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <MenuIconButton edge='start' aria-label='menu'>
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
          Sidebar
        </CustomDrawer>
      ) : (
        <CustomDrawer variant='permanent'>
          <Toolbar />
          Sidebar
        </CustomDrawer>
      )}
    </>
  );
};

export default NavbarWithDrawer;
