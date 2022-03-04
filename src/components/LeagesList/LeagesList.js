import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagesItems } from '../../store/actions';
import { getLeagesItem } from '../../store/reducer';
import { useNavigate } from 'react-router-dom';
import LeagesCard from '../LeagesCard/LeagesCard'
import { getFetchingStatus, getErrorStatus } from '../../store/reducer';
import Spinner from '../Spinner/Spinner';
import ErrorOfFetch from '../ErrorOfFetch/ErrorOfFetch'
import { Stack } from '@mui/material';

 

export default function LeagesList() {
  const dispatch = useDispatch();
  const listItems = useSelector(getLeagesItem);
  const navigate = useNavigate();
  const isFetching = useSelector(getFetchingStatus);
  const isError = useSelector(getErrorStatus);
  const actionHandler = (item) => {
    navigate(`/leages/${item.id}`)
  };
  React.useEffect(() => {
    dispatch(fetchLeagesItems());
  }, [dispatch])

  return (
    <><Stack spacing={2}>
      {isFetching ? <Spinner /> :

      

        listItems.map((item) => (

          
          <div onClick={actionHandler.bind(this, item)} key={item.id} >
            <LeagesCard card={item} />
          </div>
        ))

        
        }
                </Stack>
       { isError && <ErrorOfFetch />
        }
    </>
  );
}
