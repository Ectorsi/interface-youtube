import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import Home from './Home';


function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#cc2',
      },
      secondary: {
        main: '#42a5f5',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Home />
    </ThemeProvider>
  );
}

export default App;
