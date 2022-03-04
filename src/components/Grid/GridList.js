import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LeagesCard from '../LeagesCard/LeagesCard';



  export default function GridList() {
    const navigate = useNavigate();
    const actionHandler = (item) => {
      navigate(`/leages/${item.id}`)
    };
  
    const Item = styled(Paper)(({ theme }) => ({
  
    }));
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 6, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(15)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
          }

          /*
          listItems.map((item) => (
        
  <div onClick={actionHandler.bind(this, item)} key={item.id} >
    <LeagesCard card={item} />
  </div>
))
*/