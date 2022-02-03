import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
// import Tilov from '../assets/Tilov.jpeg';
import Doctor from '../assets/Doctor.jpg';

const StyledImage = styled('img')(() => ({
  display: 'block',
  width: '100%',
  outline: 'none',
  borderRadius: '8px',
  border: 'none',
}));

export const Promo = () => {
  return (
    <Box
      sx={{
        width: '90%',
        margin: '121px auto 81px',
        boxShadow: '0px 4px 69px 15px rgb(255 245 157 / 13%)',
        borderRadius: '8px',
      }}
    >
      <Grid container sx={{ justifyContent: 'space-around' }}>
        <Grid item xs={11} sm={6} md={6}>
          <StyledImage src={Doctor} alt="Azamat Tilov" />
        </Grid>
        <Grid item xs={11} sm={6} md={6}>
          <Typography sx={{ p: 8 }}>
            Меня зовут Тилов Азамат, я доктор! Neque porro quisquam est qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque
            porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velitNeque porro quisquam est qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
