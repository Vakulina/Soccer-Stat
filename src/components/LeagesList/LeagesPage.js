import {  useSelector } from 'react-redux';
import { getFetchingStatus, getErrorStatus } from '../../store/reducer';
import LeagesList from './LeagesList';
import Spinner from '../Spinner/Spinner';

export default function LeagesPage() {
  const isFetching = useSelector(getFetchingStatus);
  const isError = useSelector(getErrorStatus);
  return (
    <>
      <LeagesList />
    
    </>
  );
}

// {isError && <ErrorOfFetch />}
// {isFetching ? <Spinner/>: <LeagesList />}