import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import componentsOverride from './overrides';
import shadows from './shadows';


// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["'Open Sans'", 'sans-serif'].join(',')
  },
  shadows: shadows.light,
  palette: {
    primary: {
      main: '#325BAF',
    },
    secondary: {
      main: '#01D167',
    },
    background: {paper: '#0C365A'},
    error: {
      main: red.A400,
    },
  },
});
theme.components = componentsOverride(theme)


export default theme;
