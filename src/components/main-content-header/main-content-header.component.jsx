import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

import { searchMovie } from '../../features/series';

import { Search, SearchIconWrapper, StyledInputBase } from './main-content-header.styles';

const MainContentHeader = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const { currentCategory, searchTerm } = useSelector((state) => state.series);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      console.log(event.key);
      dispatch(searchMovie(searchText));
    }
  };
  return (
    <Box
      elevation={3}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        // border: '2px solid green',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px',
        paddingY: 1,
        position: 'fixed',
        top: '60px',
        width: '-webkit-fill-available',
        zIndex: '100',
        background: 'linear-gradient(90deg, rgba(32,34,54,1) 0%, rgba(50,65,98,1) 100%)',
      }}>
      <Typography
        variant='h5'
        sx={{ ml: 3, textTransform: 'capitalize', textAlign: 'center', color: '#fff' }}>
        {searchTerm ? 'Search results' : `${currentCategory.name} Series`}
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: '#fff' }} />
        </SearchIconWrapper>
        <StyledInputBase
          onKeyDown={handleSearch}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
        />
        {searchText.length > 0 && (
          <IconButton
            aria-label='delete'
            size='small'
            sx={{ color: 'white' }}
            onClick={() => setSearchText('')}>
            <ClearRoundedIcon fontSize='inherit' />
          </IconButton>
        )}
      </Search>
    </Box>
  );
};

export default MainContentHeader;
