import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import LeagesGridItem from './LeagesGridItem';
import { Pagination, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTypeOfCompetitions, getFilter } from '../../store/reducer'
import Search from '../SeachInput/Seach';
import TeamsGridItem from './TeamsGridItem';
const COUNT_TEAMS_ITEMS = 10; //в соответствии с макетом в списке лиг -9 карточек, а в списке команд - 10
const COUNT_LEAGES_ITEMS = 9;

export default function GridList({ listItems }) {

  const type = useSelector(getTypeOfCompetitions);
  const filter = useSelector(getFilter);


  const countItems = listItems.length;
  const [page, setPage] = useState(1);
  const pageSize = (type === 'leages') ? COUNT_LEAGES_ITEMS : COUNT_TEAMS_ITEMS 

  const [oneListItems, setOneListItems] = useState(listItems.slice(0, pageSize))

  const actionPaginationHandler = (event, number) => {
    setPage(number);
    const startIndex = (number - 1) * pageSize;
    const endIndex = number * pageSize
    setOneListItems(listItems.slice(startIndex, endIndex))
    console.log(number)
  }

  useEffect((e) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize
    setOneListItems(listItems.slice(startIndex, endIndex))
   
  }, [listItems, page, pageSize, filter])

  useEffect((e) => {
    actionPaginationHandler(e, 1)
  }, [listItems])

  return (
    <Container maxWidth={false}  >
      <Search />
      <Grid container spacing={2} justifyContent="center" sx={{ paddingTop: '20px' }} columns={60} >
        {
          (type === 'leages') && <LeagesGridItem items={oneListItems} />}
        {(type === 'teams') && <TeamsGridItem items={oneListItems} />
        }

        {!countItems && <Typography variant="body2" color="textSecondary" component="p">
          Ничего не найдено
        </Typography>}
        <Pagination sx={{ position: 'absolute', bottom: 20 }}
        size=	'small'
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
