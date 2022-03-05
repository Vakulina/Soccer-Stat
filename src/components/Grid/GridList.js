import { useState, useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import LeagesCard from '../LeagesCard/LeagesCard';
import { Pagination, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTypeOfCompetitions, getFilter } from '../../store/reducer'
import Search from '../SeachInput/Seach';

export default function GridList({ listItems }) {
  const navigate = useNavigate();
  const type = useSelector(getTypeOfCompetitions);
  const filter=useSelector(getFilter);

  
  const countItems = listItems.length;
  const [page, setPage] = useState(1);
  const pageSize = (type === 'leages') ? 9 : 10

  const [oneListItems, setOneListItems] = useState(listItems.slice(0, pageSize))


  const actionCardHandler = (item) => {
    navigate(`/leages/${item.id}`)
  };

  const actionPaginationHandler = (event, number) => {
    setPage(number);
    const startIndex = (number - 1) * pageSize;
    const endIndex = number * pageSize
    setOneListItems(listItems.slice(startIndex, endIndex))
  }

  
useEffect(()=>{
  const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize
    setOneListItems(listItems.slice(startIndex, endIndex))
    console.log(filter,'fff')
}, [listItems, page, pageSize, filter])


  return (
    <Container maxWidth={false}  >
    <Search/>
      <Grid container spacing={2} justifyContent="center" sx={{paddingTop:'20px'}}>
        {Array.from(oneListItems).map((item) => (
          <Grid item xs={10} xl={4} sm={4} md={4} onClick={actionCardHandler.bind(this, item)} key={item.id}>
            <LeagesCard card={item} />
          </Grid>
        ))}

      <Pagination sx={{ position: 'absolute', bottom: 20}}
        totalсount={countItems}
        page={page}
        onChange={actionPaginationHandler.bind(this)}
        variant="outlined"
        shape="rounded"
        count={Math.ceil(countItems / pageSize)}
      />    
      </Grid>
      </Container>

   );
}
