import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getEndDate, getStartDate, getErrorStatus } from '../../store/reducer';
import { fetchMathes, setTypeOfCompetitions, getNameTeam } from '../../store/actions'
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch';
import MatchItems from '../MatchesTable/MatchItems';
import { Box } from '@mui/system';
import StartDatePicker from '../DatePicker/StartDatePicker';
import EndDatePicker from '../DatePicker/EndDatePicker';

export default function LeagesMatchesPage() {

  const dateFrom = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const params = useParams();
  const isError = useSelector(getErrorStatus);
  const [data, setMatches] = useState([])
  const [name, setName] = useState('')

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setTypeOfCompetitions('teams'))
    const id = params.id;
    dispatch(fetchMathes({ id, dateFrom, dateTo, link: 'teams' }))
      .then((res) => {
        console.log(res)
        setMatches(res.matches);
      })
    dispatch(getNameTeam(id))
      .then((res) => {
        setName(res.name);
      })
  }, [dateFrom, dateTo, dispatch, params.id])

  return (
    <>
      <BreadCrumbsItem name={name} />
      <Box sx={{ display: 'flex', flexDirection: 'row', margin:1, alignItems:'center' }}>
        <Typography sx={{margin: 0.5}}>с</Typography>
        <StartDatePicker label='дата начала'  />
        <Typography sx={{margin: 0.5}}>по</Typography>
        <EndDatePicker label='дата окончания'  />
      </Box>
      {isError && <ErrorOfFetch />}
      <MatchItems data={data} />
    </>
  );
}

