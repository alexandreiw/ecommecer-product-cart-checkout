import { Typography, Divider } from '@mui/material';
import React from 'react';

export const Title = ({ children }) => {
  return (
    <>
      <Typography variant="h5" my={2}>
        {children}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};
