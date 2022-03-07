import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getEndDate, getStartDate, getErrorStatus, getFetchingStatus } from '../../store/reducer';
import { fetchMathes, setTypeOfCompetitions } from '../../store/actions';
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch';
import MatchItems from '../MatchesTable/MatchItems';
import StartDatePicker from '../DatePicker/StartDatePicker';
import EndDatePicker from '../DatePicker/EndDatePicker';
import { Box } from '@mui/system';
import { Typography, Pagination } from '@mui/material';
import Spinner from "../Spinner/Spinner"

export default function LeagesMatchesPage() {
  const dateFrom = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const params = useParams();
  const isError = useSelector(getErrorStatus);
  const [data, setMatches] = useState([])
  const [name, setName] = useState('')
  const isFetching = useSelector(getFetchingStatus);

  const dispatch = useDispatch();
  const [countItems, setCountItems] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 15;
  const [oneListItems, setOneListItems] = useState([])

  const actionPaginationHandler = (event, number) => {
    setPage(number);
    const startIndex = (number - 1) * pageSize;
    const endIndex = number * pageSize
    setOneListItems(data.slice(startIndex, endIndex))
  }

  React.useEffect(() => {
    dispatch(setTypeOfCompetitions('leages'))
    const id = params.id;
    dispatch(fetchMathes({ id, dateFrom, dateTo, link: 'competitions' }))
      .then((res) => {
        setMatches(res.matches);
        setName(res.competition.name)
        setCountItems(res.matches.length)
        setOneListItems(res.matches.slice(0, pageSize))
      })
  }, [dateFrom, dateTo, dispatch, params.id])

  return (
    <>
      <BreadCrumbsItem name={name} />
      <Box sx={{ display: 'flex', flexDirection: 'row', margin: 1, alignItems: 'center' }}>
        <Typography sx={{ margin: 0.5 }}>с</Typography>
        <StartDatePicker label='дата начала' />
        <Typography sx={{ margin: 0.5 }}>по</Typography>
        <EndDatePicker label='дата окончания' />
      </Box>
      {isFetching && <Spinner />}
      {isError && <ErrorOfFetch />}
      {(!!data.length)&& <MatchItems data={oneListItems} />}
      <Pagination sx={{ position: 'absolute', bottom: 20 }}
      size='small'
      totalсount={countItems}
      page={page}
      onChange={actionPaginationHandler.bind(this)}
      variant="outlined"
      shape="rounded"
      count={Math.ceil(countItems / pageSize)}
    />
    </>
  );
}