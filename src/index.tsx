import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import theme from './theme';

const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                    <CssBaseline />
                </StyledThemeProvider>
            </ThemeProvider>
        </React.StrictMode>
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
