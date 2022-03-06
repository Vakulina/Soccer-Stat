import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getTypeOfCompetitions, getItems, getEndDate, getStartDate, getErrorStatus, getError,
  } from '../../store/reducer';
import {fetchLeagesMathes, fetchTeamsMathes, fetchMathes,   switchSpinner,setError, setTypeOfCompetitions } from '../../store/actions'
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch'

export default function LeagesMatchesPage() {
   const dateFrom  = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const params = useParams();
  const isError = useSelector(getErrorStatus);
  const error = useSelector(getError);
  const [matches, setMatches] = useState([])
  const [name, setName] =useState('')

  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(setTypeOfCompetitions('leages'))
    const id = params.id;
      dispatch(fetchMathes({id, dateFrom, dateTo, link: 'competitions'}))
      .then((items)=> setMatches(items) )

    }

  , [dateFrom, dateTo, dispatch, params.id])

  
  return (
    <>
    <BreadCrumbsItem />
    {isError && <ErrorOfFetch />}
    </>
  );
}

