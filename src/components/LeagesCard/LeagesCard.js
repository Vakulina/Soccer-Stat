import React from 'react';
import {Card, CardActionArea, CardContent, Typography } from '@mui/material';

export default function LeagesCard(props) {
return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea sx={{ minHeight: 140}}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" >
          {props.card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.card.area.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
