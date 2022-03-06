import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getTypeOfCompetitions, getItems, getEndDate, getStartDate, getErrorStatus, getError,
  } from '../../store/reducer';
import {fetchLeagesMathes, fetchTeamsMathes, fetchMathes,   switchSpinner,setError } from '../../store/actions'
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch'

export default function LeagesMatchesPage() {
  const type = useSelector(getTypeOfCompetitions);
  const dateFrom  = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const params = useParams();
  const isError = useSelector(getErrorStatus);
  const error = useSelector(getError);
  const [matches, setMatches] = useState([])
  const [name, setName] =useState('')

  const dispatch = useDispatch();


  React.useEffect(() => {
    const id = params.id;
    if(type === 'leages'){
      dispatch(fetchMathes({id, dateFrom, dateTo, link: 'competitions'}))
      .then((items)=> setMatches(items) )
      .catch((err) => {
        dispatch(switchSpinner(false));
        dispatch(setError(err));
      });
    }

  }, [dateFrom, dateTo, dispatch, params.id, type])

  
  return (
    <>
    <BreadCrumbsItem />
    {isError && <ErrorOfFetch />}
    </>
  );
}

