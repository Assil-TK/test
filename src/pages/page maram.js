import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const healthyPalette = {
  green: '#2E8B57',
  pastelYellow: '#F0E68C',
};

const HealthyFoodPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: healthyPalette.green, color: 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Healthy Food Hub
          </Typography>
          <Tooltip title="Shopping Cart">
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2, p: 2 }}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Card sx={{ backgroundColor: healthyPalette.pastelYellow, borderRadius: '8px' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    alt="Healthy Food"
                    src="https://via.placeholder.com/150"
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <Typography variant="h6" gutterBottom>
                    Product {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of product {item}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ color: healthyPalette.green, fontWeight: 'bold' }}>
                    Learn More <ArrowRightIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HealthyFoodPage;