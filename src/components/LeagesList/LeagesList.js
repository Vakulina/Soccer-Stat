import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagesItems } from '../../store/actions';

export default function LeagesList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
   
    dispatch(fetchLeagesItems());
  }, [])
  return (
    <>
      xfsdgsdgdfg
    </>
  );
}
