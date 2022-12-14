import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import './index.css';
import App from './App';

import store from './app/store';

const theme = createTheme({
  palette: {
    textPrimary: '#fff',
    textSecondary: '#606f7c',
    bgSecondary: '#37cddb',
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
