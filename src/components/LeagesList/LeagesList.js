import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagesItems } from '../../store/actions';
import { getLeagesItems } from '../../store/reducer';

import { getFetchingStatus, getErrorStatus } from '../../store/reducer';
import Spinner from '../Spinner/Spinner';
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch'
import { Stack } from '@mui/material';
import GridList from '../Grid/GridList';

export default function LeagesList() {
  const dispatch = useDispatch();

  const listItems = useSelector(getLeagesItems);
  const isFetching = useSelector(getFetchingStatus);
  const isError = useSelector(getErrorStatus);

  const [filteredList, filterItems] = React.useState(listItems)

  React.useEffect(() => {
    dispatch(fetchLeagesItems())
      .then((res) => filterItems(res))
  }, [])

  React.useEffect(() => {
    filterItems(listItems)
  }, [listItems])

  return (
    <Stack spacing={2}>
      {isFetching ? <Spinner /> : <GridList listItems={filteredList} />}
      {isError && <ErrorOfFetch />}
    </Stack>
  );
}
