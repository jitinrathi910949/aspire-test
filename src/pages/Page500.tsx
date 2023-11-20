
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Page500() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        500
      </Typography>
    </Box>
  );
}