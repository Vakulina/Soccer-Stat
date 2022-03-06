import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getTypeOfCompetitions, getItems, getEndDate, getStartDate, getErrorStatus, getError } from '../../store/reducer';
import {fetchLeagesMathes, fetchTeamsMathes, fetchMathes,setTypeOfCompetitions, getNameTeam } from '../../store/actions'
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch';
import MatchItems from '../MatchesTable/MatchItems';

export default function LeagesMatchesPage() {

  const dateFrom  = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const params = useParams();
  const isError = useSelector(getErrorStatus);
  const [data, setMatches] = useState([])
  const [name, setName] =useState('')

  const dispatch = useDispatch();

   React.useEffect(() => {
    dispatch(setTypeOfCompetitions('teams'))
    const id = params.id;
      dispatch(fetchMathes({id, dateFrom, dateTo, link: 'teams'}))
      .then((res)=> {
        setMatches(res.matches);
      })
      dispatch(getNameTeam(id))
      .then((res)=> {
        setName(res.name);
      })
    }

  , [dateFrom, dateTo, dispatch, params.id])

  return (
    <>
    <BreadCrumbsItem name={name}/>
    {isError && <ErrorOfFetch />}
    <MatchItems data={data} />
    </>
  );
}

