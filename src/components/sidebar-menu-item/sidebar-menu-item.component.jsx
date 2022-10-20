import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

const SidebarMenuItem = ({ active, category, name, handleClick }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => handleClick(category)}
        sx={{
          backgroundColor: `${active ? '#384a6f' : 'none'}`,
          borderLeft: `${active ? '5px solid #37cddb' : 'none'}`,
          color: `${active ? 'textPrimary' : 'textSecondary'}`,
        }}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>
          <ListItemText primary={name} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarMenuItem;
