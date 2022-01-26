import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import Tilov from '../assets/Tilov.jpeg';

const StyledImage = styled('img')(() => ({
  display: 'block',
  width: '100%',
  borderRadius: '8px',
  outline: 'none',
  border: 'none',
}));

export const Promo = () => {
  return (
    <Grid container sx={{ justifyContent: 'space-around', mt: 8 }}>
      <Grid item xs={2} sm={4} md={4}>
        <Box sx={{ width: '400px' }}>
          <StyledImage src={Tilov} alt="Azamat Tilov" />
        </Box>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <Typography>Меня зовут Тилов Азамат, я доктор!</Typography>
      </Grid>
    </Grid>
  );
};
