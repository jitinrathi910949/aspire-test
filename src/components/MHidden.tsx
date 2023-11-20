import PropTypes from 'prop-types';
// material
import { Theme, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';

// ----------------------------------------------------------------------

export default function MHidden({ width, children }: {width: string; children: ReactNode}) {
  const breakpoint: any = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}
