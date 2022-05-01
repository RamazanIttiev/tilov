import React from 'react';
import { CustomAppBar } from './components/AppBar';
import { Promo } from './components/Promo';
import { Container } from '@mui/material';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { FormContainer } from './components/form/form-container';
import { Payment } from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51KsQw0A3FxV88R1iPWTiRSemG633OsL7TFp1EpzZqFdMMbhzdRc2lMDmOMwbYwl3JK492jPYKgx6VcPBi8P7u6te00tmyvuu4M');


export const App = () => {
  return (
    <React.Fragment>
      <CustomAppBar />
      <Container>
        <Promo />
        <Services />
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
        <FormContainer />
      </Container>
      <Footer />
    </React.Fragment>
  );
};
