import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import LeagesCard from '../LeagesCard/LeagesCard';
import { Pagination, Stack } from '@mui/material';

export default function GridList({ listItems }) {
  const navigate = useNavigate();

  const actionHandler = (item) => {
    navigate(`/leages/${item.id}`)
  };

  return (
    <Stack spacing={2}>
      <Grid container spacing={3}  justifyContent="center">
        {Array.from(listItems).map((item) => (
          <Grid item xs={6} xl={4} sm={4} md={4} onClick={actionHandler.bind(this, item)} key={item.id}>
           <LeagesCard card={item}/>
           </Grid>
        ))}
      </Grid>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
