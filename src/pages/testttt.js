import React from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  boxShadow: theme.shadows[4],
  padding: theme.spacing(4),
  maxWidth: '600px',
  width: '100%',
  margin: '0 auto',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Fira Sans',
  color: theme.palette.text.primary,
}));

const PromotionalPage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <StyledCard>
        <StyledTypography variant="h4" component="div" align="center">
          Promotional Offer
        </StyledTypography>
        <StyledTypography variant="body1" component="div" align="center" sx={{ mt: 2, mb: 4 }}>
          Don't miss this limited-time deal!
        </StyledTypography>
        <StyledTypography variant="h3" component="div" align="center" sx={{ mt: 2, color: '#F39325' }}>
          20% OFF
        </StyledTypography>
        <StyledTypography variant="body2" component="div" align="center" sx={{ mt: 2 }}>
          Expires in: 2 days
        </StyledTypography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }} fullWidth>
          Redeem Now
        </Button>
      </StyledCard>
    </Box>
  );
};

export default PromotionalPage;