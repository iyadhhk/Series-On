import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toolbar } from '@mui/material';

import NavbarWithDrawer from '../../components/navbar-with-drawer/navbar-with-drawer.component';
import MainContentHeader from '../../components/main-content-header/main-content-header.component';

import { AppContainer, MainContent } from './navigation.styles';

const Navigation = () => {
  return (
    <AppContainer color='textPrimary'>
      <NavbarWithDrawer />
      <MainContent>
        <MainContentHeader />
        <Toolbar />
        <Outlet />
      </MainContent>
    </AppContainer>
  );
};

export default Navigation;
