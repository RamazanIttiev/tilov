import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { Assignment } from '@mui/icons-material';

const servicesData = [
  {
    title: <Typography variant="h5">Название услуги</Typography>,
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 1000000,
    icon: <Assignment sx={{ fontSize: 32 }} />,
  },
  {
    title: <Typography variant="h5">Название услуги</Typography>,
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 1000000,
    icon: <Assignment sx={{ fontSize: 32 }} />,
  },
  {
    title: <Typography variant="h5">Название услуги</Typography>,
    description:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    price: 1000000,
    icon: <Assignment sx={{ fontSize: 32 }} />,
  },
];

export const Services = () => {
  return (
    <Box component="section" sx={{ p: '81px 0' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: '32px' }}>
        Услуги
      </Typography>
      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {servicesData.map(({ title, description, price, icon }) => {
          return (
            <Grid item xs={11} sm={6} md={4}>
              <Card
                sx={{
                  padding: '24px',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardHeader title={title} avatar={icon} />
                <CardContent>
                  <Typography variant="body2" color="text.primary">
                    {description}
                  </Typography>
                  <Typography
                    sx={{ margin: '32px 0 0', fontSize: 14 }}
                    color="text.secondary"
                  >
                    Цена: {price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
