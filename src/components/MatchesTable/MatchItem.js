import moment from 'moment';
import imageGoals from '../../service/imagingGoals';
import { TableRow, TableCell } from '@mui/material'
import './MatchItems.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDateEnd, setDateStart } from '../../store/actions';

export default function MatchItem(props) {
  const dispatch = useDispatch();
  const {
    status, homeTeam, awayTeam, score, utcDate,
  } = props.data;
  const goals = imageGoals(score);
  const data = moment(utcDate).format('YYYY-MM-DD');
  useEffect(()=>{
    return function cleanup() {
      dispatch(setDateEnd(false))
      dispatch(setDateStart(false))
    };
  })

  return (
    <TableRow className='row'>
      <TableCell component="th" scope="row">{data}</TableCell>
      <TableCell align="right">{status}</TableCell>
      <TableCell align="right">{homeTeam.name}</TableCell>
      <TableCell align="right">{goals}</TableCell>
      <TableCell align="right">{awayTeam.name}</TableCell>
    </TableRow>
  );
}