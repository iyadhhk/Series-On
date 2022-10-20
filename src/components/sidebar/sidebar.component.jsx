import React, { useState } from 'react';
import { List, Divider } from '@mui/material';

import SidebarMenuItem from '../sidebar-menu-item/sidebar-menu-item.component';

import { SidebarMenu } from './sidebar.styles';

const categories = [
  {
    label: 'Trending',
    value: 'trending',
  },
  {
    label: 'Popular',
    value: 'popular',
  },
  {
    label: 'Top Rated',
    value: 'top_rated',
  },
];

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('trending');

  const handleMenuItemClick = (value) => {
    setSelectedCategory(value);
  };

  return (
    <SidebarMenu>
      <List>
        {categories.map(({ label, value }) => (
          <SidebarMenuItem
            key={value}
            category={value}
            name={label}
            active={selectedCategory === value}
            handleClick={handleMenuItemClick}
          />
        ))}
      </List>
      <Divider variant='middle' sx={{ borderColor: 'textSecondary' }} />
    </SidebarMenu>
  );
};

export default Sidebar;
