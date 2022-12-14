import React from 'react';
import { Outlet } from 'react-router-dom';

import NavbarWithDrawer from '../../components/navbar-with-drawer/navbar-with-drawer.component';

import { AppContainer, MainContent } from './navigation.styles';

const Navigation = () => {
  return (
    <AppContainer color='textPrimary'>
      <NavbarWithDrawer />
      <MainContent>
        <Outlet />
      </MainContent>
    </AppContainer>
  );
};

export default Navigation;
