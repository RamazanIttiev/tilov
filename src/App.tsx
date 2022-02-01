import React from 'react';
import { CustomAppBar } from './components/AppBar';
import { Promo } from './components/Promo';
import { Container } from '@mui/material';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { Services } from './components/Services';

export const App = () => {
  return (
    <React.Fragment>
      <CustomAppBar />
      <Container>
        <Promo />
        <Services />
        <Form />
      </Container>
      <Footer />
    </React.Fragment>
  );
};
