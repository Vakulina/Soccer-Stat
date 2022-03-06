import React, { useEffect } from 'react';

import { Breadcrumbs, Typography, Link } from '@mui/material';

import { useParams } from 'react-router-dom';
import { getTypeOfCompetitions, getItems } from '../../store/reducer';
import { useDispatch, useSelector } from 'react-redux';

export default function BreadCrumbsItem({ props }) {


  const type = useSelector(getTypeOfCompetitions);
  const items = useSelector(getItems);

  const params = useParams();
  const currentPage = +params.id
  let name

  if (items && items.length) {
    name = items.filter((item) => {
      if (item.id === currentPage) { return item }
    })[0].name
  }
  else { name = '...' }
  console.log(name)


  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href={`/${type}`}>
        {type}
      </Link>

      <Typography color="text.primary">{name}</Typography>
    </Breadcrumbs>
  );
}
