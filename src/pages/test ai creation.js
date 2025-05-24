import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';

const PromotionsCards = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container maxWidth="lg" style={{ backgroundColor: '#F5F5F6', padding: '20px' }}>
      <Box style={{ textAlign: 'center', margin: '20px 0' }}>
        <Typography variant="h4" style={{ fontFamily: 'Fira Sans', color: '#1B374C' }}>
          Promotions d'Abonnements Parkings
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {Array.from({ length: 3 }, (_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, backgroundColor: '#F3F9FF' }}>
              <CardMedia
                component="img"
                height="194"
                image={`https://via.placeholder.com/150?text=Salle+${index + 1}`}
                alt={`Promotion ${index + 1}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Fira Sans', color: '#1B374C' }}>
                  Promotion {index + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discount on parking for the month of January.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={handleExpandClick}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph style={{ fontFamily: 'Fira Sans', color: '#1B374C' }}>
                    Enjoy a special discount on your parking monthly package. Don't miss this opportunity!
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PromotionsCards;