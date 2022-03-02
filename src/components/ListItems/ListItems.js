import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import filterCompetitionList from '../service/filterCompetitionList';
import Card from './Card';
import { fetching } from '../../store/actions';
import determineTypeOfPage from '../services/determineTypeOfPage';
import './ListItems.css';

export default function ListItems() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return filterCompetitionList(state);
  });

  const handlClickCard = () => {
    dispatch(fetching());
  };
  
  const type = useSelector((state)=>determineTypeOfPage(state));

  return (
    <main className="content">
      {
        data.map((item) => (
          <Link onClick={handlClickCard} className="content__link" to={`/${type}/${item.id}`} key={item.id}>
            <Card card={item} />
          </Link>
        ))

      }
    </main>
  );
}
