import React from 'react';
import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';

const PromoPage = () => {
  return (
    <Box sx={{ bgcolor: '#F5F5F6', minHeight: '100vh', fontFamily: 'Fira Sans' }}>
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#DADADA', p: 4, borderRadius: 2 }}>
              <Typography variant="h3" sx={{ color: '#1B374C', mb: 2 }}>
                Get Exclusive Offers
              </Typography>
              <Typography variant="body1" sx={{ color: '#333', mb: 4 }}>
                Sign up to receive exclusive discounts, promotions, and more.
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField variant="outlined" label="Email" sx={{ mb: 2, width: '100%' }} />
                <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
                  Get Started
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="promo-image.jpg" alt="Promo" style={{ width: '100%', borderRadius: 8 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PromoPage;