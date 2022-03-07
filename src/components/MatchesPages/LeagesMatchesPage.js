import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getEndDate, getStartDate, getErrorStatus } from '../../store/reducer';
import { fetchMathes, setTypeOfCompetitions } from '../../store/actions';
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch';
import MatchItems from '../MatchesTable/MatchItems';
import StartDatePicker from '../DatePicker/StartDatePicker';
import EndDatePicker from '../DatePicker/EndDatePicker';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function LeagesMatchesPage() {
  const dateFrom = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const params = useParams();
  const isError = useSelector(getErrorStatus);
  const [data, setMatches] = useState([])
  const [name, setName] = useState('')


  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setTypeOfCompetitions('leages'))
    const id = params.id;
    dispatch(fetchMathes({ id, dateFrom, dateTo, link: 'competitions' }))
      .then((res) => {
        setMatches(res.matches);
        setName(res.competition.name)
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
      {isError && <ErrorOfFetch />}
      {!isError && <MatchItems data={data} />}
    </>
  );
}

