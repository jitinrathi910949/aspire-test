import { merge } from 'lodash';
import Button from './Button';
import { Theme } from '@mui/material';


// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Button(theme),
  );
}
