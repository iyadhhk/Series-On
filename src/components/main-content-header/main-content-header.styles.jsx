import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#384a6f',
  borderRadius: '0',
  borderRight: '5px solid #37cddb',
  marginLeft: 0,
  width: '40%',
  height: '40px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  cursor: 'pointer',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
