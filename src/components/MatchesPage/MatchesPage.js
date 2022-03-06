import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getTypeOfCompetitions, getItems, getEndDate, getStartDate } from '../../store/reducer';
import {fetchLeagesMathes } from '../../store/actions'

export default function MatchesPage() {
  const type = useSelector(getTypeOfCompetitions);
  const dateFrom  = useSelector(getStartDate);
  const dateTo = useSelector(getEndDate);
  const items = useSelector(getItems);
  const params = useParams();

  const dispatch = useDispatch();


  React.useEffect(() => {
    const id = params.id;

    if(type === 'leages'){
      dispatch(fetchLeagesMathes({id, dateFrom, dateTo}))
    }
    if(type === 'teams'){
      dispatch(fetchLeagesMathes({id, dateFrom, dateTo}))
    }
 
  }, [dateFrom, dateTo, dispatch, params.id, type])

  
  return (
    <>
    <BreadCrumbsItem />
    </>
  );
}

