import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { PhoneIphone } from '@mui/icons-material';

export const CustomAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Тилов Азамат
          </Typography>
          <IconButton color="inherit">
            <PhoneIphone />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
