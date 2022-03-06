import { useSelector } from 'react-redux'
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { getTypeOfCompetitions } from '../../store/reducer';
export default function BreadCrumbsItem({ name }) {
  const type = useSelector(getTypeOfCompetitions);
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href={`/${type}`}>
        {type}
      </Link>
      <Typography color="text.primary">{name}</Typography>
    </Breadcrumbs>
  );
}
