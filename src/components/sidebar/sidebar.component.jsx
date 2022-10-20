import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { List, Divider, CircularProgress, Box } from '@mui/material';

import { useGetGenresQuery } from '../../services/tmdb';
import { setCategory } from '../../features/series';

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
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const { data, error, isFetching } = useGetGenresQuery();

  const handleMenuItemClick = (value) => {
    dispatch(setCategory(selectedCategory));
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
            onClick={() => handleMenuItemClick(value)}
          />
        ))}
      </List>
      <Divider variant='middle' sx={{ borderColor: 'textSecondary' }} />
      <List>
        {isFetching ? (
          <Box display='flex' justifyContent='center'>
            <CircularProgress />
          </Box>
        ) : (
          data?.genres.map(({ name, id }) => (
            <SidebarMenuItem
              key={id}
              onClick={() => handleMenuItemClick(id)}
              category={id}
              name={name}
              active={selectedCategory === id}
            />
          ))
        )}
      </List>
    </SidebarMenu>
  );
};

export default Sidebar;
