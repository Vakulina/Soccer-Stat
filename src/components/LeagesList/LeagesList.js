import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeagesItems } from '../../store/actions';
import { getLeagesItem } from '../../store/reducer';
import { useNavigate } from 'react-router-dom';
import LeagesCard from '../LeagesCard/LeagesCard'

export default function LeagesList() {
  const dispatch = useDispatch();
const listItems = useSelector(getLeagesItem);
const navigate = useNavigate();

const actionHandler = (item) => {
  navigate(`/leages/${item.id}`)
};
  React.useEffect(() => {
       dispatch(fetchLeagesItems());
    
  }, [dispatch])
  


  return (
    <>
            {listItems.map((item) => (
        <div onClick={actionHandler.bind(this, item)}  key={item.id}>
            <LeagesCard  card={item} />
            </div>
        ))}

    </>
  );
}
/*
          <Link className="content__link" to={`/leages/${item.id}`} key={item.id}>
            <LeagesCard card={item} />
          </Link>
          */