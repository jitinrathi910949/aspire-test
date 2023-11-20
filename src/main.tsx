import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme/theme';
import App from './App';
import { store } from './store';
import Router from './routes';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
    <BrowserRouter>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
      </BrowserRouter>

    </ReduxProvider>
  </React.StrictMode>,
);
