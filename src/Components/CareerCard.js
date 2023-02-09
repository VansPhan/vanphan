import * as React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  Typography,
} from '@mui/material';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <Grid container spacing={5}>
          <Grid item xs>
            2019 - Present
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs>
            Accenture
          </Grid>
        </Grid>
      </Typography>
      <Typography mb={4} sx={{ fontSize: 14, textAlign: 'left' }} color="text.secondary">
        Technical Lead,
        <br />
        Custom Software Engineering Associate Manager
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function CareerCard() {
  return (
    <Box sx={{ minWidth: 400 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}