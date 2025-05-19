import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  page: {
    backgroundColor: '#F5F5F6',
    fontFamily: 'Fira Sans',
    padding: '50px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    color: '#1B374C',
    fontSize: '32px',
    fontWeight: 600,
    marginBottom: '20px',
    textAlign: 'center',
  },
  content: {
    color: '#565656',
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '40px',
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#F39325',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 600,
    padding: '12px 24px',
    '&:hover': {
      backgroundColor: '#D06310',
    },
  },
});

const PromoPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Container className={classes.container}>
        <Typography className={classes.title}>Découvrez nos meilleurs plans de parking en promotion</Typography>
        <Typography className={classes.content}>
          Profitez de gros réductions sur nos offres de réservation de parkings ! Que vous soyez au travail, à l'école ou juste pour le week-end, nous avons une place pour vous à un prix avantageux. Profitez de notre promotion exclusive pour une expérience parking optimale à des tarifs imbattables.
        </Typography>
        <Button className={classes.button}>En savoir plus</Button>
      </Container>
    </Box>
  );
};

export default PromoPage;