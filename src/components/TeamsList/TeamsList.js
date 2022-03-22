import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamsItems, installFilter} from '../../store/actions';
import { getTeamsItems } from '../../store/reducer';
import { getFetchingStatus, getErrorStatus} from '../../store/reducer';
import Spinner from '../Spinner/Spinner';
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch'
import { Stack } from '@mui/material';
import GridList from '../GridList/GridList';

export default function LeagesList() {
  const dispatch = useDispatch();
  const listItems = useSelector(getTeamsItems);
  const isFetching = useSelector(getFetchingStatus);
  const isError = useSelector(getErrorStatus);

  const [filterList, filterItems] =React.useState([])
  
  React.useEffect(()=>{
    dispatch(installFilter(''))
    dispatch(fetchTeamsItems())
    },[dispatch])

  React.useEffect(()=>{
    filterItems(listItems)
   },[listItems])

  return (
    <Stack spacing={2}>
            {isError && <ErrorOfFetch />}
      {isFetching && <Spinner /> }
      {!isError && !isFetching && <GridList listItems={filterList} />}

    </Stack>
  );
}
