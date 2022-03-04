import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagesItems } from '../../store/actions';
import { getLeagesItem } from '../../store/reducer';
import { getFetchingStatus, getErrorStatus } from '../../store/reducer';
import Spinner from '../Spinner/Spinner';
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch'
import { Stack} from '@mui/material';
import GridList from '../Grid/GridList';

export default function LeagesList() {
  const dispatch = useDispatch();
  const listItems = useSelector(getLeagesItem);
  const isFetching = useSelector(getFetchingStatus);
  const isError = useSelector(getErrorStatus);

  React.useEffect(() => {
    dispatch(fetchLeagesItems());
  }, [dispatch])

  return (
 <Stack spacing={2}>
      {isFetching ? <Spinner /> : <GridList listItems={listItems} />        }
                
       { isError && <ErrorOfFetch />
        }
        </Stack>
 
  );
}
