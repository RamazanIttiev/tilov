import React from 'react';
import { CustomAppBar } from './components/AppBar';
import { Promo } from './components/Promo';
import { Container } from '@mui/material';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <React.Fragment>
      <CustomAppBar />
      <Container>
        <Promo />
        <Form />
      </Container>
      <Footer />
    </React.Fragment>
  );
};
