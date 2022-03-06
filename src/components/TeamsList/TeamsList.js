import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamsItems, installFilter} from '../../store/actions';
import { getTeamsItems } from '../../store/reducer';
import { getFetchingStatus, getErrorStatus, getFilter } from '../../store/reducer';
import Spinner from '../Spinner/Spinner';
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch'
import { Stack } from '@mui/material';
import GridList from '../Grid/GridList';

export default function LeagesList() {
  const dispatch = useDispatch();
  const listItems = useSelector(getTeamsItems);
  const isFetching = useSelector(getFetchingStatus);
  const isError = useSelector(getErrorStatus);
  const filter=useSelector(getFilter);

  const [filterList, filterItems] =React.useState([])
  
  React.useEffect(()=>{
    dispatch(installFilter(''))
    dispatch(fetchTeamsItems())
    },[])

  React.useEffect(()=>{
    filterItems(listItems)
   },[listItems])

  return (
    <Stack spacing={2}>
      {isFetching ? <Spinner /> : <GridList listItems={filterList}/>}
      {isError && <ErrorOfFetch />}
    </Stack>
  );
}
