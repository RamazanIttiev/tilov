import { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

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
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 100px #2f2f2f inset !important',
          },
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          'input[type=number]': {
            '-moz-appearance': 'textfield',
          },
        },
      },
    },
  },
});
