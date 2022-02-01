import { createTheme, ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#191A1C',
    },
    secondary: {
      main: '#FFF59D',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});
