import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import BreadCrumbsItem from '../BreadCrumbs/BreadCrumbsItem';
import { useParams } from 'react-router-dom';
import { getTypeOfCompetitions, getItems } from '../../store/reducer';

export default function MatchesPage() {
  const type = useSelector(getTypeOfCompetitions);
  const items = useSelector(getItems);

  const params = useParams();
  const currentPage = params.id

  
  return (
    <>
    <BreadCrumbsItem />
    </>
  );
}

