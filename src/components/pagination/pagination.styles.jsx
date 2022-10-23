import { Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomPagination = styled(Pagination)(({ theme }) => ({
  color: theme.palette.textPrimary,
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '40px',
  '& .MuiButtonBase-root': { color: theme.palette.textSecondary },
  '& .MuiPaginationItem-root': { color: theme.palette.textSecondary },
  '& .Mui-selected': {
    backgroundColor: theme.palette.bgSecondary,
    color: theme.palette.textPrimary,
  },
}));
