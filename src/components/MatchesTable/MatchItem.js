import moment from 'moment';
import imageGoals from '../../service/imagingGoals';
import { TableRow, TableCell } from '@mui/material'
import './MatchItems.css'

export default function MatchItem(props) {
  const {
    status, homeTeam, awayTeam, score, utcDate,
  } = props.data;
  const goals = imageGoals(score);
  const data = moment(utcDate).format('YYYY-MM-DD');

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