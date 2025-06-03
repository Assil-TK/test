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
import orangeJuice from '../assets/download.jpg';
import italianSalad from '../assets/FAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg';
import fishAndChips from '../assets/Fish-and-chips-with-tomato-salad.jpg';

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
          {[1, 2, 3].map((item) => {
            let imageSrc, productName, productDescription;
            if (item === 1) {
              imageSrc = orangeJuice;
              productName = 'Orange Juice';
              productDescription = 'Fresh and orange-flavored, 100% juice!';
            } else if (item === 2) {
              imageSrc = italianSalad;
              productName = 'Italian Salad';
              productDescription = 'A delicious blend of fresh ingredients and flavorful dressings.';
            } else {
              imageSrc = fishAndChips;
              productName = 'Fish and Chips';
              productDescription = 'Traditional British dish with crispy fish and chips with tomato salad ';
            }
            return (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Card sx={{ backgroundColor: healthyPalette.pastelYellow, borderRadius: '8px' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                      alt="Healthy Food"
                      src={imageSrc}
                      style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {productDescription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: healthyPalette.green, fontWeight: 'bold' }}>
                      Learn More <ArrowRightIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default HealthyFoodPage;