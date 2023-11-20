import PropTypes from 'prop-types';
// material
import { useTheme } from '@mui/material/styles';
import { Box, SxProps } from '@mui/material';
import { FC } from 'react';

// ----------------------------------------------------------------------

export default function Logo({ sx }: {sx: SxProps }) {
  return (
    <Box
      component="img"
      // src={JSON.parse(localStorage.getItem('companyMeta'))?.companyLogo || '/favicon/karmaFavicon.png'}
      src="/logo.svg"
      sx={{ height: 'auto', ...sx }}
    />
  );
}
