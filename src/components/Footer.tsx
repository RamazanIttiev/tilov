import React from 'react';
import { Box, Grid, IconButton, Link } from '@mui/material';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';
import { Form } from './Form';

export const Footer = () => {
  return (
    <Grid container spacing={4} component="footer" sx={{ mt: 12 }}>
      <Grid
        item
        md={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: theme => theme.palette.secondary.main,
          color: theme => theme.palette.secondary.contrastText,
        }}
      >
        <Box>
          <IconButton sx={{ color: '#000', height: '42px' }}>
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: '#000', height: '42px' }}>
            <WhatsApp />
          </IconButton>
          <IconButton sx={{ color: '#000', height: '42px' }}>
            <Telegram />
          </IconButton>
        </Box>
        <Link
          sx={{
            width: '100%',
            textAlign: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
          href="tel:+79215588401"
        >
          +7 (921) 558-84-01
        </Link>
      </Grid>
      <Grid item md={8}>
        <Form />
      </Grid>
    </Grid>
  );
};
