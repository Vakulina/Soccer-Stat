import React from 'react';
import {Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    minHeight: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
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
