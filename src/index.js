import { CssBaseline, ThemeProvider } from '@mui/material';
import { App } from 'components/App';
import theme from 'muiTheme/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router basename="/med-doc-front">
            <App />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
