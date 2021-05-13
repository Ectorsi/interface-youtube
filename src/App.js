import React from 'react';
import {Button, ThemeProvider, createMuiTheme} from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#7986cb',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Button variant="contained" color="secondary">Hellow World Material UI</Button>
    </ThemeProvider>
  );
}

export default App;
