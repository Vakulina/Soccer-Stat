import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagesItems } from '../../store/actions';
import { getLeagesItem } from '../../store/reducer';


export default function LeagesList() {
  const dispatch = useDispatch();
const listItems = useSelector(getLeagesItem);

  React.useEffect(() => {
   
    dispatch(fetchLeagesItems());
    
  }, [dispatch])
  
  return (
    <>
      {listItems.map((item) =>
      <div key={item.id}>
         <h3>{item.name}</h3>
         </div>
      )}
    </>
  );
}
