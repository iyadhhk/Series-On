import React from 'react';

import { LogoText, IOSSwitch } from './navbar-logo.styles';

const NavbarLogo = () => {
  return (
    <LogoText>
      Serie's
      <IOSSwitch defaultChecked />
    </LogoText>
  );
};

export default NavbarLogo;
