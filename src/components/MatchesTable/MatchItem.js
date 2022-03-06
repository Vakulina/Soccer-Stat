import './MatchItems.css';
import moment from 'moment';
import imageGoals from '../../service/imageGoals'

export default function MatchItem(props) {
  
  const {
    status, homeTeam, awayTeam, score, utcDate,
  } = props.data;
 

  const goals = imageGoals(score);

  const data = moment(utcDate).format('YYYY-MM-DD');

  return (
    <tr className="row">
      <td>{data}</td>
      <td>{status}</td>
      <td>{homeTeam.name}</td>
      <td>{goals}</td>
      <td>{awayTeam.name}</td>
    </tr>
  );
}
