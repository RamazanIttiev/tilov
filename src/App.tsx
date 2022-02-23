import React from 'react';
import { CustomAppBar } from './components/AppBar';
import { Promo } from './components/Promo';
import { Container } from '@mui/material';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { FormContainer } from './components/form/form-container';

export const App = () => {
  return (
    <React.Fragment>
      <CustomAppBar />
      <Container>
        <Promo />
        <Services />
        <FormContainer />
      </Container>
      <Footer />
    </React.Fragment>
  );
};
