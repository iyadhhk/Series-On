import React from 'react';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      Navigation
      <Outlet />
    </div>
  );
};

export default Navigation;
