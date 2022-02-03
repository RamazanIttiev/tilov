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
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'fff' }}>
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
