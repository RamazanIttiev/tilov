import React from 'react';
import { CustomAppBar } from './components/AppBar';
import { Promo } from './components/Promo';
import { Container } from '@mui/material';

export const App = () => {
  return (
    <React.Fragment>
      <CustomAppBar />
      <Container>
        <Promo />
      </Container>
    </React.Fragment>
  );
};
