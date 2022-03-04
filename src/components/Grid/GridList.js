import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import LeagesCard from '../LeagesCard/LeagesCard';
import { Pagination, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import {getTypeOfCompetitions} from '../../store/reducer'

export default function GridList({ listItems }) {
  const navigate = useNavigate();
  const type = useSelector(getTypeOfCompetitions);
  const countItems= listItems.length;
  const [page, setPage] = useState(1);


const pageSize = (type === 'leages')? 9 : 10

const [oneListItems, setOneListItems] = useState(listItems.slice(0, pageSize))

  const actionCardHandler = (item) => {
    navigate(`/leages/${item.id}`)
  };
 
  useEffect(() => {
   
  }, [oneListItems])


  const actionPaginationHandler = (event, number)=>{
  setPage(number);
  const startIndex = (number-1)*pageSize;
  const endIndex = number*pageSize
  setOneListItems(listItems.slice(startIndex, endIndex ))
  console.log(startIndex, endIndex)
  }


console.log(countItems)
  return (
    <Stack spacing={2}>
      <Grid container spacing={3} justifyContent="center">
        {Array.from(oneListItems).map((item) => (
          <Grid item xs={6} xl={4} sm={4} md={4} onClick={actionCardHandler.bind(this, item)} key={item.id}>
            <LeagesCard card={item} />
          </Grid>
        ))}
      </Grid>
      <Pagination 
      totalсount={countItems}
      page={page} 
      onChange={actionPaginationHandler.bind(this)}
      variant="outlined"
       shape="rounded" 
       count={Math.ceil(countItems/pageSize)}
       />
    </Stack>
  );
}
