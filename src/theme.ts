import { createTheme, ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff59d',
    },
    secondary: {
      main: '#ffecb3',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    background: {
      default: '#2f2f2f',
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
