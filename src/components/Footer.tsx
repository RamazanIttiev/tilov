import React from 'react';
import { Box, Grid, IconButton, Link } from '@mui/material';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Grid container component="footer" sx={{ mt: 12 }}>
      <Grid
        item
        md={12}
        sm={12}
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          p: '16px 0',
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
            cursor: 'pointer',
          }}
          href="tel:+79215588401"
        >
          +7 (921) 558-84-01
        </Link>
      </Grid>
    </Grid>
  );
};
