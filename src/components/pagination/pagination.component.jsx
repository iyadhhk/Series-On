import React from 'react';
import { Stack } from '@mui/material';

import { CustomPagination } from './pagination.styles';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={2}>
      <CustomPagination
        variant='text'
        size='large'
        count={totalPages > 10 ? 10 : totalPages}
        page={currentPage}
        onChange={handlePageChange}
        defaultPage={1}
      />
    </Stack>
  );
};

export default Pagination;
