import React from 'react';
import MatchItem from './MatchItem';
import { useSelector } from 'react-redux';
import { getError } from '../../store/reducer'

export default function MatchItems(props) {
  console.log(props)
  const isError = useSelector(getError);
  return (
    <>
    {!isError && <table className="matchItems-table" cellPadding="6" cellSpacing="4">
    <thead>
      <tr>
        <th>Дата</th>
        <th>Статус</th>
        <th>Домашняя команда</th>
        <th>Счет</th>
        <th>Приглашенная команда</th>
      </tr>
    </thead>
    <tbody>
        {props.data.map((item, i) => (
        <MatchItem data={item} key={i} />
      ))}
    </tbody>
    </table>}
</>
  );
}
