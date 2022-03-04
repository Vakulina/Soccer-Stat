import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LeagesCard from '../LeagesCard/LeagesCard';
import { Pagination, Stack, Typography } from '@mui/material';



export default function GridList({ listItems }) {
  const navigate = useNavigate();

  const actionHandler = (item) => {
    navigate(`/leages/${item.id}`)
  };

  const Item = styled(Paper)(({ theme }) => ({

  }));
  return (
    <Stack spacing={2}>
      <Grid container spacing={{ xs: 6, md: 5 }}  justifyContent="center" >
        {Array.from(listItems).map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id} >
            <div onClick={actionHandler.bind(this, item)} key={item.id} >
              <LeagesCard card={item}/>
            </div>
          </Grid>
        ))}
      </Grid>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}

/*
listItems.map((item) => (   
<div onClick={actionHandler.bind(this, item)} key={item.id} >
<LeagesCard card={item} />
</div>
))
*/