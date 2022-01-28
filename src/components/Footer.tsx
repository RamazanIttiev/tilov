import React from 'react';
import { Box, IconButton, Link } from '@mui/material';
import { Instagram, Telegram, WhatsApp } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        minHeight: '72px',
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <IconButton>
        <Instagram />
      </IconButton>
      <IconButton>
        <WhatsApp />
      </IconButton>
      <IconButton>
        <Telegram />
      </IconButton>
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
    </Box>
  );
};
